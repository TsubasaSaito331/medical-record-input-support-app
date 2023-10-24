import fs from 'fs';

import { createLanguageModel, createJsonTranslator } from 'typechat';

import type { RoundsFromChatGPT } from './roundsSchema';

const model = createLanguageModel({
  OPENAI_MODEL: 'gpt-3.5-turbo',
  OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const schema = fs.readFileSync('./src/lib/typechat/roundsSchema.ts', 'utf8');
export const translator = createJsonTranslator<RoundsFromChatGPT>(
  model,
  schema,
  'RoundsFromChatGPT',
);
