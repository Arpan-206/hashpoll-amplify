import os
import sys
from urllib.parse import urlparse

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from gql.transport.appsync_auth import AppSyncApiKeyAuthentication
from pydantic import BaseModel

load_dotenv()

app = FastAPI()
origins = [
    "*",  # Allow all origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
url = os.environ.get("AWS_GRAPHQL_API_ENDPOINT")
api_key = os.environ.get("AWS_GRAPHQL_API_KEY")

if url is None or api_key is None:
    print("Missing environment variables")
    sys.exit()

# Extract host from url
host = str(urlparse(url).netloc)

auth = AppSyncApiKeyAuthentication(host=host, api_key=api_key)

transport = AIOHTTPTransport(url=url, auth=auth)


class PollIn(BaseModel):
    question: str
    option1: str
    option2: str
    option3: str
    option4: str


@app.post("/create")
async def create(poll: PollIn):
    async with Client(
        transport=transport, fetch_schema_from_transport=False,
    ) as session:

        query1 = gql(
            """
mutation CreatePollResponse($option1: Int!, $option2: Int!, $option3: Int!, $option4: Int!, $responses: Int!) {
  createPollResponse(input: {option2: $option2, option4: $option4, responses: $responses, option1: $option1, option3: $option3}) {
    id
    option1
    option2
    option3
    option4
    responses
  }
}"""
        )

        variable_values = {"option1": 0, "option2": 0,
                           "option3": 0, "option4": 0, "responses": 0}

        result1 = await session.execute(query1, variable_values=variable_values)
        try:
            result1 = result1["createPollResponse"]["id"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error creating poll response")
        query2 = gql(
            """
mutation CreatePoll( $option1: String!, $option2: String!, $option3: String!, $option4: String!, $question: String!, $pollPollResponseId: ID) {
  createPoll(input: {option1: $option1, option2: $option2, option3: $option3, option4: $option4, pollPollResponseId: $pollPollResponseId, question: $question}) {
    createdAt
    id
    option1
    option2
    option3
    option4
    pollPollResponseId
    question
    updatedAt
  }
}""")
        variable_values = {"option1": poll.option1, "option2": poll.option2,
                           "option3": poll.option3, "option4": poll.option4, "question": poll.question, "pollPollResponseId": result1}
        result2 = await session.execute(query2, variable_values=variable_values)
        try:
            result2 = result2["createPoll"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error creating poll")

        return {"message": "Poll created", "poll": result2}


@app.get("/get/{poll_id}")
async def get(poll_id: str):
    async with Client(
        transport=transport, fetch_schema_from_transport=False,
    ) as session:

        query = gql(
            """
query GetPoll($id: ID!) {
  getPoll(id: $id) {
    createdAt
    id
    option1
    option2
    option3
    option4
    pollPollResponseId
    question
    updatedAt
  }
}
"""
        )

        variable_values = {"id": poll_id}

        result = await session.execute(query, variable_values=variable_values)
        try:
            result = result["getPoll"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error getting poll")

        return {"message": "Poll fetched", "poll": result}





@app.get("/get-responses")
async def get_responses(poll_id: str):
    async with Client(
        transport=transport, fetch_schema_from_transport=False,
    ) as session:

        query = gql(
            """
query GetResponse($id: ID!) {
  getPoll(id: $id) {
    PollResponse {
      id
      option1
      option2
      option3
      option4
      responses
      updatedAt
    }
    id
    option1
    option2
    option3
    option4
    pollPollResponseId
    question
    createdAt
  }
}
""")
        variable_values = {"id": poll_id}
        result = await session.execute(query, variable_values=variable_values)
        try:
            result = result["getPoll"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error getting poll")
        responses = result["PollResponse"]
        res_to_send = {"id": result["id"], "question": result["question"], "option1": responses["option1"], "option2": responses["option2"],
                       "option3": responses["option3"], "option4": responses["option4"], "responses": responses["responses"]}
        
        return {"message": "Poll responses fetched", "poll": res_to_send}


class Vote(BaseModel):
    poll_id: str
    vote: int


@app.post("/vote")
async def vote(vote: Vote):
    async with Client(
        transport=transport, fetch_schema_from_transport=False,
    ) as session:

        query = gql(
            """
query GetResponse($id: ID!) {
  getPoll(id: $id) {
    PollResponse {
      id
      option1
      option2
      option3
      option4
      responses
      updatedAt
      _version
    }
    id
    option1
    option2
    option3
    option4
    pollPollResponseId
    question
    createdAt
  }
}
""")
        variable_values = {"id": vote.poll_id}
        result = await session.execute(query, variable_values=variable_values)
        try:
            result = result["getPoll"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error getting poll")
        responses = result["PollResponse"]
        if vote.vote == 1:
            responses["option1"] += 1
        elif vote.vote == 2:
            responses["option2"] += 1
        elif vote.vote == 3:
            responses["option3"] += 1
        elif vote.vote == 4:
            responses["option4"] += 1
        else:
            return HTTPException(status_code=400, detail="Invalid vote")
        responses["responses"] += 1
        query2 = gql(
            """
mutation UpdatePollResponse($id: ID!, $option1: Int!, $option2: Int!, $option3: Int!, $option4: Int!, $responses: Int!, $version: Int!) {
  updatePollResponse(input: {id: $id, option2: $option2, option4: $option4, responses: $responses, option1: $option1, option3: $option3, _version: $version}) {
    id
    option1
    option2
    option3
    option4
    responses
  }
}""")
        variable_values = {"id": responses["id"], "option1": responses["option1"], "option2": responses["option2"],
                           "option3": responses["option3"], "option4": responses["option4"], "responses": responses["responses"], "version": responses["_version"]}
        result2 = await session.execute(query2, variable_values=variable_values)
        try:
            result2 = result2["updatePollResponse"]
        except KeyError:
            return HTTPException(status_code=500, detail="Error updating poll response")
        return {"message": "Poll response updated", "poll": result2}