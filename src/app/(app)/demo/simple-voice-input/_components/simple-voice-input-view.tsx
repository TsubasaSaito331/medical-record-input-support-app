'use client';

import { useRouter } from 'next/navigation';

import { RecordingButton } from '@/components/recording-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ROUNDS_ITEM_LABEL_WITH_UNIT } from '@/constants/rounds';
import { useASRInput } from '@/hooks/useASRInput';

export const SimpleVoiceInputView = () => {
  const router = useRouter();

  const {
    value: temperatureValue,
    setValue: setTemperatureValue,
    toggleRecording: toggleTemperatureRecording,
    transcript: temperatureTranscript,
    recording: temperatureRecording,
  } = useASRInput({
    target: 'TEMPERATURE',
    continuous: true,
  });

  const {
    value: pulseValue,
    setValue: setPulseValue,
    toggleRecording: togglePulseRecording,
    transcript: pulseTranscript,
    recording: pulseRecording,
  } = useASRInput({
    target: 'PULSE',
    continuous: true,
  });

  const {
    value: bloodPressureHighValue,
    setValue: setBloodPressureHighValue,
    toggleRecording: toggleBloodPressureHighRecording,
    transcript: bloodPressureHighTranscript,
    recording: bloodPressureHighRecording,
  } = useASRInput({
    target: 'BLOOD_PRESSURE_HIGH',
    continuous: true,
  });

  const {
    value: bloodPressureLowValue,
    setValue: setBloodPressureLowValue,
    toggleRecording: toggleBloodPressureLowRecording,
    transcript: bloodPressureLowTranscript,
    recording: bloodPressureLowRecording,
  } = useASRInput({
    target: 'BLOOD_PRESSURE_LOW',
    continuous: true,
  });

  const {
    value: respirationValue,
    setValue: setRespirationValue,
    toggleRecording: toggleRespirationRecording,
    transcript: respirationTranscript,
    recording: respirationRecording,
  } = useASRInput({
    target: 'RESPIRATION',
    continuous: true,
  });

  const {
    value: noteValue,
    setValue: setNoteValue,
    toggleRecording: toggleNoteRecording,
    transcript: noteTranscript,
    recording: noteRecording,
  } = useASRInput({
    target: 'NOTE',
    continuous: true,
  });

  const buttonDisabled =
    !temperatureValue ||
    !pulseValue ||
    !bloodPressureHighValue ||
    !bloodPressureLowValue ||
    !respirationValue ||
    !noteValue;

  const onClickSendButton = () => {
    router.push('/demo');
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.TEMPERATURE}</Label>
          <div>
            {temperatureTranscript && (
              <div className="text-sm">{temperatureTranscript}</div>
            )}
            <div className="flex gap-2">
              <Input
                value={temperatureValue}
                onChange={(e) => setTemperatureValue(e.target.value)}
                inputMode="numeric"
              />
              <RecordingButton
                recording={temperatureRecording}
                onClick={toggleTemperatureRecording}
              />
            </div>
          </div>
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.PULSE}</Label>
          <div>
            {pulseTranscript && (
              <div className="text-sm">{pulseTranscript}</div>
            )}
            <div className="flex gap-2">
              <Input
                value={pulseValue}
                onChange={(e) => setPulseValue(e.target.value)}
                inputMode="numeric"
              />
              <RecordingButton
                recording={pulseRecording}
                onClick={togglePulseRecording}
              />
            </div>
          </div>
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.BLOOD_PRESSURE_HIGH}</Label>
          <div>
            {bloodPressureHighTranscript && (
              <div className="text-sm">{bloodPressureHighTranscript}</div>
            )}
            <div className="flex gap-2">
              <Input
                value={bloodPressureHighValue}
                onChange={(e) => setBloodPressureHighValue(e.target.value)}
                inputMode="numeric"
              />
              <RecordingButton
                recording={bloodPressureHighRecording}
                onClick={toggleBloodPressureHighRecording}
              />
            </div>
          </div>
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.BLOOD_PRESSURE_LOW}</Label>
          <div>
            {bloodPressureLowTranscript && (
              <div className="text-sm">{bloodPressureLowTranscript}</div>
            )}
            <div className="flex gap-2">
              <Input
                value={bloodPressureLowValue}
                onChange={(e) => setBloodPressureLowValue(e.target.value)}
                inputMode="numeric"
              />
              <RecordingButton
                recording={bloodPressureLowRecording}
                onClick={toggleBloodPressureLowRecording}
              />
            </div>
          </div>
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.RESPIRATION}</Label>
          <div>
            {respirationTranscript && (
              <div className="text-sm">{respirationTranscript}</div>
            )}
            <div className="flex gap-2">
              <Input
                value={respirationValue}
                onChange={(e) => setRespirationValue(e.target.value)}
                inputMode="numeric"
              />
              <RecordingButton
                recording={respirationRecording}
                onClick={toggleRespirationRecording}
              />
            </div>
          </div>
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.NOTE}</Label>
          <div>
            {noteTranscript && <div className="text-sm">{noteTranscript}</div>}
            <div className="flex gap-2">
              <Input
                value={noteValue}
                onChange={(e) => setNoteValue(e.target.value)}
              />
              <RecordingButton
                recording={noteRecording}
                onClick={toggleNoteRecording}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button size="lg" onClick={onClickSendButton} disabled={buttonDisabled}>
          送信
        </Button>
      </div>
    </>
  );
};
