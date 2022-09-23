/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPollResponse = /* GraphQL */ `
  query GetPollResponse($id: ID!) {
    getPollResponse(id: $id) {
      id
      option1
      option2
      option3
      option4
      responses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPollResponses = /* GraphQL */ `
  query ListPollResponses(
    $filter: ModelPollResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        option1
        option2
        option3
        option4
        responses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPollResponses = /* GraphQL */ `
  query SyncPollResponses(
    $filter: ModelPollResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPollResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        option1
        option2
        option3
        option4
        responses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
      id
      question
      option1
      option2
      option3
      option4
      PollResponse {
        id
        option1
        option2
        option3
        option4
        responses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pollPollResponseId
    }
  }
`;
export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        option1
        option2
        option3
        option4
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pollPollResponseId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPolls = /* GraphQL */ `
  query SyncPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        option1
        option2
        option3
        option4
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pollPollResponseId
      }
      nextToken
      startedAt
    }
  }
`;
