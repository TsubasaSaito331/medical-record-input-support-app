'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { RecordingButton } from '@/components/recording-button';
import { RemovableInput } from '@/components/removable-input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useASRInput } from '@/hooks/useASRInput';
import { soapFromChatGPT } from '@/lib/api/soap';

export const modelValue =
  'おはようございます調子はいかがですかおはようございますえーと少し頭痛がします頭痛ですか昨晩はよく眠れましたかそうですね何度か目が覚めてしまいました分かりました後ほど頭痛の薬を持ってきますねそれと体温を測りたいと思いますはいお願いします体温は37.8℃ですね少し高めです今のところ寒気や他の症状はありますかえーと寒気は特にないですが背中が痛いです背中ですか位置はどの辺りでしょうかうーん腰のあたりです分かりました後ほどマッサージや温熱治療を検討してみますね血圧も測りたいと思いますはいよろしくお願いします血圧は130/85です少し高めなので適度な運動や食事の改善を検討しましょう水分は1日にどのくらいとってますか1.5リットルくらいですかよくわかってないけど多分そのくらいですわかりました国循から1日2リットルの指示が出ているのでしっかり2リットルを飲むようにしましょうほかに何かきになることはありますか夜間にトイレに行くことが多くてあまりよく眠れていません利尿剤が効いてるんですかねそれはたぶん年のせいと飲む水の量が増えたからですねもしどうしても気になるようなら泌尿器科を受診してくださいそれでは本日の回診は終了ですお疲れ様です';

export const SOAPView = () => {
  const { value, setValue, toggleRecording, transcript, recording } =
    useASRInput({
      target: 'MAIN',
      continuous: true,
    });

  const [subjective, setSubjective] = useState<string[]>(['']);
  const [objective, setObjective] = useState<string[]>(['']);
  const [structuring, setStructuring] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (recording || value === '') {
        return;
      }

      try {
        setStructuring(true);
        const result = await soapFromChatGPT({ text: value });
        if (result.success === false) {
          toast({
            variant: 'destructive',
            title: '構造化に失敗しました',
            description: 'もう一度お試しください',
          });
          return;
        }

        const { data } = result;

        data.SUBJECTIVE && setSubjective(data.SUBJECTIVE);
        data.OBJECTIVE && setObjective(data.OBJECTIVE);
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
  }, [recording, setValue, value]);

  return (
    <>
      <div className="space-y-4">
        {recording ? <div>{value + transcript}</div> : <div>{value}</div>}
        <div>
          <Label>Subjective</Label>
          <div className="space-y-3">
            {subjective.map((s, i) => (
              <RemovableInput
                key={i}
                value={s}
                onChange={(e) => {
                  const newSubjective = [...subjective];
                  newSubjective[i] = e.target.value;
                  setSubjective(newSubjective);
                }}
                onRemove={() => {
                  const newSubjective = [...subjective];
                  newSubjective.splice(i, 1);
                  setSubjective(newSubjective);
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <Label>Objective</Label>
            <div className="space-y-3">
              {objective.map((o, i) => (
                <RemovableInput
                  key={i}
                  value={o}
                  onChange={(e) => {
                    const newObjective = [...objective];
                    newObjective[i] = e.target.value;
                    setObjective(newObjective);
                  }}
                  onRemove={() => {
                    const newObjective = [...objective];
                    newObjective.splice(i, 1);
                    setObjective(newObjective);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="mt-8 flex items-center justify-center">
              {structuring ? (
                <Button size="lg" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  構造化中
                </Button>
              ) : (
                <Button size="lg" onClick={() => setValue(modelValue)}>
                  モデルケースを試す
                </Button>
              )}
            </div>
          </div>
        </div>
        <div>
          <Label>モデルケース</Label>
          <div className="rounded bg-slate-200 p-2 text-xs">{modelValue}</div>
        </div>
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
