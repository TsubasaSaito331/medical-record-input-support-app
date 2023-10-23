export const EXPERIMENT_EVAL_KEY = {
  MODI_SYNC: 'MODI_SYNC',
  REF_SYNC: 'REF_SYNC',
  USING_CHAT_GPT: 'USING_CHAT_GPT',
  MANUAL_INPUT_PC: 'MANUAL_INPUT_PC',
  MANUAL_INPUT_MOBILE: 'MANUAL_INPUT_MOBILE',
} as const;

export const EXPERIMENT_EVAL_KEYS = Object.values(EXPERIMENT_EVAL_KEY);

export interface ExperimentEval {
  easeOfUse: number;
  time: number;
}

export const EXPERIMENT_TARGET_PATH = {
  MODI_SYNC: '/experiment/modi-sync',
  REF_SYNC: '/experiment/ref-sync',
  USING_CHAT_GPT: '/experiment/using-chat-gpt',
  MANUAL_INPUT_PC: '/experiment/manual-input-pc',
  MANUAL_INPUT_MOBILE: '/experiment/manual-input-mobile',
} as const;

export const EXPERIMENT_TARGET_PATHS = Object.values(EXPERIMENT_TARGET_PATH);
