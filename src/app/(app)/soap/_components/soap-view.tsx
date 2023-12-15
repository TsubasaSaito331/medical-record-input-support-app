'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { EditableInputWithMenu } from '@/components/editable-input-with-menu';
import { RecordingButton } from '@/components/recording-button';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useASRInput } from '@/hooks/useASRInput';
import { soapFromChatGPT } from '@/lib/api/soap';
import type { Summary } from '@/lib/typechat/soap';

const menuItems = ['s', 'o', 'a', 'p'] as const;

export const modelValue =
  'おはようございます調子はいかがですかおはようございますえーと少し頭痛がします頭痛ですか昨晩はよく眠れましたかそうですね何度か目が覚めてしまいました分かりました後ほど頭痛の薬を持ってきますねそれと体温を測りたいと思いますはいお願いします体温は37.8℃ですね少し高めです今のところ寒気や他の症状はありますかえーと寒気は特にないですが背中が痛いです背中ですか位置はどの辺りでしょうかうーん腰のあたりです分かりました後ほどマッサージや温熱治療を検討してみますね血圧も測りたいと思いますはいよろしくお願いします血圧は130/85です少し高めなので適度な運動や食事の改善を検討しましょう水分は1日にどのくらいとってますか1.5リットルくらいですかよくわかってないけど多分そのくらいですわかりました国循から1日2リットルの指示が出ているのでしっかり2リットルを飲むようにしましょうほかに何かきになることはありますか夜間にトイレに行くことが多くてあまりよく眠れていません利尿剤が効いてるんですかねそれはたぶん年のせいと飲む水の量が増えたからですねもしどうしても気になるようなら泌尿器科を受診してくださいそれでは本日の回診は終了ですお疲れ様です';

export const SOAPView = () => {
  const { value, setValue, toggleRecording, transcript, recording } =
    useASRInput({
      target: 'MAIN',
      continuous: true,
    });

  const [subjective, setSubjective] = useState<string[]>(['hoge']);
  const [objective, setObjective] = useState<string[]>(['huga']);
  const [assessment, setAssessment] = useState<string[]>(['piyo']);
  const [plan, setPlan] = useState<string[]>(['hyoge']);
  const [summary, setSummary] = useState<Summary>([
    // { speaker: 'doctor', text: '体調はいかがですか' },
    // { speaker: 'patient', text: '少し頭痛がします' },
    // { speaker: 'doctor', text: '昨晩はよく眠れましたか' },
    // { speaker: 'patient', text: '何度か目が覚めてしまいました' },
    // { speaker: 'doctor', text: '体温は37.8℃ですね' },
  ]);
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

        console.log(data);

        data.SUBJECTIVE && setSubjective(data.SUBJECTIVE);
        data.OBJECTIVE && setObjective(data.OBJECTIVE);
        data.ASSESSMENT && setAssessment(data.ASSESSMENT);
        data.PLAN && setPlan(data.PLAN);
        data.SUMMARY && setSummary(data.SUMMARY);
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

        {/* Subjective */}
        <div>
          <Label>Subjective</Label>
          <div className="space-y-3">
            {subjective.map((s, i) => (
              <EditableInputWithMenu
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
                menuItems={[...menuItems].filter((item) => item !== 's')}
                onMenuSelect={(item) => {
                  // まず、選択したアイテムを自分のところから削除する
                  const newSubjective = [...subjective];
                  newSubjective.splice(i, 1);
                  setSubjective(newSubjective);

                  if (item === 's') {
                    setSubjective([...objective, s]);
                  }
                  if (item === 'o') {
                    setObjective([...objective, s]);
                  }
                  if (item === 'a') {
                    setAssessment([...assessment, s]);
                  }
                  if (item === 'p') {
                    setPlan([...plan, s]);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Objective */}
        <div>
          <Label>Objective</Label>
          <div className="space-y-3">
            {objective.map((o, i) => (
              <EditableInputWithMenu
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
                menuItems={[...menuItems].filter((item) => item !== 'o')}
                onMenuSelect={(item) => {
                  // まず、選択したアイテムを自分のところから削除する
                  const newObjective = [...objective];
                  newObjective.splice(i, 1);
                  setObjective(newObjective);

                  if (item === 's') {
                    setSubjective([...subjective, o]);
                  }
                  if (item === 'o') {
                    setObjective([...objective, o]);
                  }
                  if (item === 'a') {
                    setAssessment([...assessment, o]);
                  }
                  if (item === 'p') {
                    setPlan([...plan, o]);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Assessment */}
        <div>
          <Label>Assessment</Label>
          <div className="space-y-3">
            {assessment.map((a, i) => (
              <EditableInputWithMenu
                key={i}
                value={a}
                onChange={(e) => {
                  const newAssessment = [...assessment];
                  newAssessment[i] = e.target.value;
                  setAssessment(newAssessment);
                }}
                onRemove={() => {
                  const newAssessment = [...assessment];
                  newAssessment.splice(i, 1);
                  setAssessment(newAssessment);
                }}
                menuItems={[...menuItems].filter((item) => item !== 'a')}
                onMenuSelect={(item) => {
                  // まず、選択したアイテムを自分のところから削除する
                  const newAssessment = [...assessment];
                  newAssessment.splice(i, 1);
                  setAssessment(newAssessment);

                  if (item === 's') {
                    setSubjective([...subjective, a]);
                  }
                  if (item === 'o') {
                    setObjective([...objective, a]);
                  }
                  if (item === 'a') {
                    setAssessment([...assessment, a]);
                  }
                  if (item === 'p') {
                    setPlan([...plan, a]);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Plan */}
        <div>
          <Label>Plan</Label>
          <div className="space-y-3">
            {plan.map((p, i) => (
              <EditableInputWithMenu
                key={i}
                value={p}
                onChange={(e) => {
                  const newPlan = [...plan];
                  newPlan[i] = e.target.value;
                  setPlan(newPlan);
                }}
                onRemove={() => {
                  const newPlan = [...plan];
                  newPlan.splice(i, 1);
                  setPlan(newPlan);
                }}
                menuItems={[...menuItems].filter((item) => item !== 'p')}
                onMenuSelect={(item) => {
                  // まず、選択したアイテムを自分のところから削除する
                  const newPlan = [...plan];
                  newPlan.splice(i, 1);
                  setPlan(newPlan);

                  if (item === 's') {
                    setSubjective([...subjective, p]);
                  }
                  if (item === 'o') {
                    setObjective([...objective, p]);
                  }
                  if (item === 'a') {
                    setAssessment([...assessment, p]);
                  }
                  if (item === 'p') {
                    setPlan([...plan, p]);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
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

            {/* Summary */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  disabled={summary.length < 1}
                >
                  要約を見る
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="space-y-4">
                  {summary.map((s, i) => (
                    <div key={i}>
                      {s.speaker === 'patient' ? (
                        <p>患者の発言: {s.text}</p>
                      ) : (
                        <p>医者の発言: {s.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
