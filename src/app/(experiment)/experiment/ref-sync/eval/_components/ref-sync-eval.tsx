'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export const RefSyncEval = () => {
  const [evalValue, setEvalValue] = useState([2]);

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
        <Button>送信</Button>
      </div>
    </div>
  );
};
