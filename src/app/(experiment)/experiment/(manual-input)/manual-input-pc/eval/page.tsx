import { PageTitle } from '@/components/page-title';
import { EXPERIMENT_EVAL_KEY } from '@/constants/experiment';

import { ManualInputEval } from '../../_components/manual-input-eval';

export default function ManualInputPCEvalPage() {
  return (
    <div>
      <PageTitle>評価: 手動入力（PC）</PageTitle>
      <div className="mt-8">
        <ManualInputEval mode={EXPERIMENT_EVAL_KEY.MANUAL_INPUT_PC} />
      </div>
    </div>
  );
}
