import type { Result } from 'typechat';

import type { RoundsFromChatGPT } from '../typechat/roundsSchema';

export const structureFromChatGPT = async (args: { text: string }) => {
  const res = await fetch('/api/structure', {
    method: 'POST',
    body: JSON.stringify({
      text: args.text,
    }),
  });
  const data = (await res.json()) as Result<RoundsFromChatGPT>;
  return data;
};
