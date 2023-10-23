export const EXPERIMENT_EVAL_KEY = {
  MODI_SYNC: 'EXPERIMENT_MODI_SYNC',
  REF_SYNC: 'EXPERIMENT_REF_SYNC',
  USING_CHAT_GPT: 'EXPERIMENT_USING_CHAT_GPT',
} as const;

export const EXPERIMENT_EVAL_KEYS = Object.values(EXPERIMENT_EVAL_KEY);

export interface ExperimentEval {
  easeOfUse: number;
  time?: number;
}
