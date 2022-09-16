import { CONTEXT_MESSAGE } from "../constants/contextMessageMapping";
import { getContextByValue } from "../services/database/context";
import { CacheInstance } from "../services/cache";

export const getMessageReply = async (
  services: {
    database: { getContextByValue: typeof getContextByValue };
    cache: CacheInstance;
  },
  input: {
    conversation_id: string;
    message: string;
  }
) => {

  // TODO: Process the input and return a response based on the input's context
  // Note: All imports are already provided
  //
  // Example input.message "Hello World"
  // Example output.message "Welcome to Adaca."
  // reply_id should be equal to conversation_id
  //

  // Sample Workflow
  // 1. Check Cache, if cache exists, return data
  // 2. If no cache exists, start process again
  // 3. Check each words, use `services.database.getContextByValue` to detect context
  // 4. Map the context to message and send it as a reply, check `src/constants/contextMessageMapping.ts`


  return {
    reply_id: input.conversation_id,
    message: input.message,
  };
};
