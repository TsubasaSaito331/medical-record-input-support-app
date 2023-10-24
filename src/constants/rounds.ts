export const ROUNDS_ITEMS = {
  /* 体調 **/
  TEMPERATURE: 'TEMPERATURE',
  /* 脈拍 **/
  PULSE: 'PULSE',
  /* 血圧上 **/
  BLOOD_PRESSURE_HIGH: 'BLOOD_PRESSURE_HIGH',
  /* 血圧下 **/
  BLOOD_PRESSURE_LOW: 'BLOOD_PRESSURE_LOW',
  /* 呼吸回数 **/
  RESPIRATION: 'RESPIRATION',
  /** 補足事項 */
  NOTE: 'NOTE',
} as const;

export type ROUNDS_ITEM = (typeof ROUNDS_ITEMS)[keyof typeof ROUNDS_ITEMS];

export const ROUNDS_ITEM_LABEL = {
  TEMPERATURE: '体温',
  PULSE: '脈拍',
  BLOOD_PRESSURE_HIGH: '血圧上',
  BLOOD_PRESSURE_LOW: '血圧下',
  RESPIRATION: '呼吸数',
  NOTE: '補足事項',
} as const satisfies Record<ROUNDS_ITEM, string>;
export const ROUNDS_ITEM_LABELS = Object.values(ROUNDS_ITEM_LABEL);

export const ROUNDS_ITEM_UNITS = {
  TEMPERATURE: '度',
  PULSE: '回/分',
  BLOOD_PRESSURE_HIGH: 'mmHg',
  BLOOD_PRESSURE_LOW: 'mmHg',
  RESPIRATION: '回/分',
  NOTE: '',
} as const satisfies Record<ROUNDS_ITEM, string>;
