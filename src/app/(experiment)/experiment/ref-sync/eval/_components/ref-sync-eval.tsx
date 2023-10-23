'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSessionStorage } from 'react-use';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import type { ExperimentEval } from '@/constants/experiment';
import { EXPERIMENT_EVAL_KEY } from '@/constants/experiment';

export const RefSyncEval = () => {
  const [evalValue, setEvalValue] = useState([2]);
  const router = useRouter();
  const [, setRefSyncEvalStorage] = useSessionStorage<ExperimentEval>(
    EXPERIMENT_EVAL_KEY.REF_SYNC,
  );

  const onClickSendButton = () => {
    setRefSyncEvalStorage({
      easeOfUse: evalValue[0] + 1, // 0 ~ 4 -> 1 ~ 5
    });
    router.push('/experiment');
  };

  return (
    <div>
      <div className="space-y-2">
        <Label>使いやすさ</Label>
        <Slider
          value={evalValue}
          onValueChange={setEvalValue}
          max={4}
          step={1}
        />
      </div>
      <div className="flex justify-center mt-8">
        <Button onClick={onClickSendButton}>送信</Button>
      </div>
    </div>
  );
};
