'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSessionStorage } from 'react-use';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import type { ExperimentEval } from '@/constants/experiment';
import type { EXPERIMENT_EVAL_KEY } from '@/constants/experiment';

interface Props {
  mode:
    | typeof EXPERIMENT_EVAL_KEY.MANUAL_INPUT_PC
    | typeof EXPERIMENT_EVAL_KEY.MANUAL_INPUT_MOBILE;
}

export const ManualInputEval = ({ mode }: Props) => {
  const [manualInputEvalStorage, setManualInputEvalStorage] =
    useSessionStorage<ExperimentEval>(mode);
  const [evalValue, setEvalValue] = useState([2]);
  const [time, setTime] = useState(manualInputEvalStorage.time);
  const router = useRouter();

  const onClickSendButton = () => {
    setManualInputEvalStorage({
      time: time,
      easeOfUse: evalValue[0] + 1, // 0 ~ 4 -> 1 ~ 5
    });
    router.push('/experiment');
  };

  return (
    <div>
      <div className="space-y-1">
        <Label>時間</Label>
        <Input
          value={time}
          type="number"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <div className="mt-8 space-y-2">
        <Label>使いやすさ</Label>
        <Slider
          value={evalValue}
          onValueChange={setEvalValue}
          max={4}
          step={1}
        />
      </div>
      <div className="mt-12 flex justify-center">
        <Button onClick={onClickSendButton}>送信</Button>
      </div>
    </div>
  );
};