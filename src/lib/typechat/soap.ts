import { createJsonTranslator, createLanguageModel } from 'typechat';

export interface SOAPFromChatGPT {
  SUBJECTIVE?: string[] | null;
  OBJECTIVE?: string[] | null;
}

const schema = `
export interface SOAPFromChatGPT {
  SUBJECTIVE?: string[] | null;
  OBJECTIVE?: string[] | null;
}
`;

const model = createLanguageModel({
  OPENAI_MODEL: 'gpt-4',
  OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const soapTranslator = createJsonTranslator<SOAPFromChatGPT>(
  model,
  schema,
  'SOAPFromChatGPT',
);
