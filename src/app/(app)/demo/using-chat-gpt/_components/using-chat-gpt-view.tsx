'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { RecordingButton } from '@/components/recording-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ROUNDS_ITEM_LABEL_WITH_UNIT } from '@/constants/rounds';
import { useASRInput } from '@/hooks/useASRInput';
import { roundsFromChatGPT } from '@/lib/api/rounds';

export const UsingChatGPTView = () => {
  const { value, setValue, toggleRecording, transcript, recording } =
    useASRInput({
      target: 'MAIN',
      continuous: true,
    });

  const router = useRouter();
  const [structuring, setStructuring] = useState(false);
  const { toast } = useToast();

  // Input states
  const [temperature, setTemperature] = useState('');
  const [pulse, setPulse] = useState('');
  const [bloodPressureHigh, setBloodPressureHigh] = useState('');
  const [bloodPressureLow, setBloodPressureLow] = useState('');
  const [respiration, setRespiration] = useState('');
  const [note, setNote] = useState('');

  const buttonDisabled =
    temperature === '' ||
    pulse === '' ||
    bloodPressureHigh === '' ||
    bloodPressureLow === '' ||
    respiration === '' ||
    note === '';

  const onClickSendButton = () => {
    router.push('/demo');
  };

  useEffect(() => {
    async function fetchData() {
      if (recording || value === '') {
        return;
      }

      try {
        setStructuring(true);
        const result = await roundsFromChatGPT({ text: value });
        if (result.success === false) {
          toast({
            variant: 'destructive',
            title: '構造化に失敗しました',
            description: 'もう一度お試しください',
          });
          return;
        }

        const { data } = result;

        data.TEMPERATURE && setTemperature(data.TEMPERATURE.toString());
        data.PULSE && setPulse(data.PULSE.toString());
        data.BLOOD_PRESSURE_HIGH &&
          setBloodPressureHigh(data.BLOOD_PRESSURE_HIGH.toString());
        data.BLOOD_PRESSURE_LOW &&
          setBloodPressureLow(data.BLOOD_PRESSURE_LOW.toString());
        data.RESPIRATION && setRespiration(data.RESPIRATION.toString());
        data.NOTE && setNote(data.NOTE);
      } catch (e) {
        toast({
          variant: 'destructive',
          title: '構造化に失敗しました',
          description: 'もう一度お試しください',
        });
      } finally {
        setStructuring(false);
      }

      setValue('');
    }

    void fetchData();
  }, [recording, setValue, toast, value]);

  return (
    <>
      <div className="space-y-4">
        {recording ? <div>{value + transcript}</div> : <div>{value}</div>}
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.TEMPERATURE}</Label>
          <Input
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.PULSE}</Label>
          <Input
            value={pulse}
            onChange={(e) => setPulse(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.BLOOD_PRESSURE_HIGH}</Label>
          <Input
            value={bloodPressureHigh}
            onChange={(e) => setBloodPressureHigh(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.BLOOD_PRESSURE_LOW}</Label>
          <Input
            value={bloodPressureLow}
            onChange={(e) => setBloodPressureLow(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.RESPIRATION}</Label>
          <Input
            value={respiration}
            onChange={(e) => setRespiration(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div>
          <Label>{ROUNDS_ITEM_LABEL_WITH_UNIT.NOTE}</Label>
          <Input value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        {structuring ? (
          <Button size="lg" onClick={onClickSendButton} disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            構造化中
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={onClickSendButton}
            disabled={buttonDisabled}
          >
            送信
          </Button>
        )}
      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <RecordingButton
          onClick={toggleRecording}
          recording={recording}
          loading={structuring}
        />
      </div>
    </>
  );
};
