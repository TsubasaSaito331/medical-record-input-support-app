import { EXPERIMENT_EVAL_KEY } from '@/constants/experiment';

import { ManualInputView } from '../_components/manual-input-view';

export default function ManualInputPCPage() {
  return (
    <div>
      <ManualInputView mode={EXPERIMENT_EVAL_KEY.MANUAL_INPUT_PC} />
    </div>
  );
}
