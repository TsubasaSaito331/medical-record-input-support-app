'use client';

import { RecordingButton } from '@/components/recording-button';
import { useASRInput } from '@/hooks/useASRInput';

export const UsingChatGPTView = () => {
  const { value, toggleRecording, transcript, recording } = useASRInput({
    target: 'MAIN',
  });

  return (
    <>
      <div>{recording ? transcript : value}</div>
      <div className="space-y-8 mt-10"></div>

      <div className="fixed z-50 bottom-8 right-8">
        <RecordingButton onClick={toggleRecording} recording={recording} />
      </div>
    </>
  );
};
