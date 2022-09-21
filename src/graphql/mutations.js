/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPollResponse = /* GraphQL */ `
  mutation CreatePollResponse(
    $input: CreatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    createPollResponse(input: $input, condition: $condition) {
      id
      question_id
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
export const updatePollResponse = /* GraphQL */ `
  mutation UpdatePollResponse(
    $input: UpdatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    updatePollResponse(input: $input, condition: $condition) {
      id
      question_id
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
export const deletePollResponse = /* GraphQL */ `
  mutation DeletePollResponse(
    $input: DeletePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    deletePollResponse(input: $input, condition: $condition) {
      id
      question_id
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
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
      id
      author
      question
      option1
      option2
      option3
      option4
      PollResponse {
        id
        question_id
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
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
      id
      author
      question
      option1
      option2
      option3
      option4
      PollResponse {
        id
        question_id
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
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
      id
      author
      question
      option1
      option2
      option3
      option4
      PollResponse {
        id
        question_id
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
