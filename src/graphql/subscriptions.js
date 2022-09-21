/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePollResponse = /* GraphQL */ `
  subscription OnCreatePollResponse {
    onCreatePollResponse {
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
export const onUpdatePollResponse = /* GraphQL */ `
  subscription OnUpdatePollResponse {
    onUpdatePollResponse {
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
export const onDeletePollResponse = /* GraphQL */ `
  subscription OnDeletePollResponse {
    onDeletePollResponse {
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
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
      id
      author
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
      id
      author
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
      id
      author
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
