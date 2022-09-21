// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PollResponse, Poll } = initSchema(schema);

export {
  PollResponse,
  Poll
};