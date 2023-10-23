export const EXPERIMENT_EVAL_KEY = {
  MODI_SYNC: 'EXPERIMENT_MODI_SYNC',
  REF_SYNC: 'EXPERIMENT_REF_SYNC',
  USING_CHATGPT: 'EXPERIMENT_USING_CHATGPT',
} as const;

export const EXPERIMENT_EVAL_KEYS = Object.values(EXPERIMENT_EVAL_KEY);

export interface ExperimentEval {
  easeOfUse: number;
}
