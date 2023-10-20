'use client';

import { RecordingButton } from '@/components/recording-button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ROUNDS_ITEM_LABELS } from '@/constants/rounds';
import { useRefSync } from '@/hooks/useRefSync';

import { RefSyncInputs } from './ref-sync-inputs';

export const RefSyncView = () => {
  const {
    originalValue,
    setOriginalValue,
    recording,
    transcript,
    toggleRecording,
    temperaturePositions,
    pulsePositions,
    bloodPressureHighPositions,
    bloodPressureLowPositions,
    respirationPositions,
    notePositions,
  } = useRefSync();

  return (
    <>
      {recording || originalValue.length === 0 ? (
        <div>{originalValue + transcript}</div>
      ) : (
        <Textarea
          value={originalValue}
          onChange={(e) => setOriginalValue(e.target.value)}
        />
      )}
      <div className="space-y-8 mt-10"></div>
      <section className="space-y-8">
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.TEMPERATURE}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={temperaturePositions}
            onChange={setOriginalValue}
          />
        </div>
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.PULSE}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={pulsePositions}
            onChange={setOriginalValue}
          />
        </div>
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.BLOOD_PRESSURE_HIGH}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={bloodPressureHighPositions}
            onChange={setOriginalValue}
          />
        </div>
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.BLOOD_PRESSURE_LOW}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={bloodPressureLowPositions}
            onChange={setOriginalValue}
          />
        </div>
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.RESPIRATION}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={respirationPositions}
            onChange={setOriginalValue}
          />
        </div>
        <div className="space-y-1">
          <Label>{ROUNDS_ITEM_LABELS.NOTE}</Label>
          <RefSyncInputs
            originalText={originalValue}
            pickUpPositions={notePositions}
            onChange={setOriginalValue}
          />
        </div>
      </section>

      <div className="fixed z-50 bottom-8 right-8">
        <RecordingButton onClick={toggleRecording} recording={recording} />
      </div>
    </>
  );
};
