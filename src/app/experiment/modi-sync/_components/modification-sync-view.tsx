'use client';

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
      <div className="fixed z-50 bottom-8 right-8">
        <RecordingButton onClick={toggleRecording} recording={recording} />
      </div>
    </>
  );
};
