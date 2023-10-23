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
      <div className="mt-10 space-y-8"></div>

      <div className="fixed bottom-8 right-8 z-50">
        <RecordingButton onClick={toggleRecording} recording={recording} />
      </div>
    </>
  );
};
