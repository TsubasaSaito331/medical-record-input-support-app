'use client';

import { InputWithLabel } from '@/components/input-with-label';
import { RecordingButton } from '@/components/recording-button';
import { useASRInput } from '@/hooks/useASRInput';

export const ModificationSyncView = () => {
  const { value, setValue, toggleRecording, transcript, recording } =
    useASRInput({
      target: 'MAIN',
    });

  return (
    <>
      <div>{recording ? transcript : value}</div>
      <div className="space-y-8 mt-10">
        <InputWithLabel id="体温" label="体温" />
        <InputWithLabel id="脈拍毎分" label="脈拍毎分" />
        <InputWithLabel id="呼吸毎分" label="呼吸毎分" />
        <InputWithLabel id="血圧上" label="血圧上" />
        <InputWithLabel id="血圧下" label="血圧下" />
      </div>

      <div className="fixed z-50 bottom-8 right-8">
        <RecordingButton onClick={toggleRecording} recording={recording} />
      </div>
    </>
  );
};
