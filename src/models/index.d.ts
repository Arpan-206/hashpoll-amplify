import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PollResponseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PollResponse {
  readonly id: string;
  readonly option1: number;
  readonly option2: number;
  readonly option3: number;
  readonly option4: number;
  readonly responses: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PollResponse, PollResponseMetaData>);
  static copyOf(source: PollResponse, mutator: (draft: MutableModel<PollResponse, PollResponseMetaData>) => MutableModel<PollResponse, PollResponseMetaData> | void): PollResponse;
}

export declare class Poll {
  readonly id: string;
  readonly question: string;
  readonly option1: string;
  readonly option2: string;
  readonly option3: string;
  readonly option4: string;
  readonly PollResponse?: PollResponse | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pollPollResponseId?: string | null;
  constructor(init: ModelInit<Poll, PollMetaData>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll, PollMetaData>) => MutableModel<Poll, PollMetaData> | void): Poll;
}