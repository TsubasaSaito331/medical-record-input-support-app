import dynamic from 'next/dynamic';

import { PageTitle } from '@/components/page-title';

import { ExperimentResultTable } from './_components/experiment-result-table';

// 乱数を使って次のページを決定するので、SSRを無効化する
const DynamicExperimentNavigatorButton = dynamic(
  () => import('./_components/experiment-navigator-button'),
  { ssr: false },
);

export default function Experiment() {
  // TODO: server actionsで実行する。
  //   const response =
  //     await translator.translate(`以下の本文、ルール、項目から、項目に関連度の高い情報を抽出せよ。

  // ## 本文
  // 本日の体温は36.5度、脈拍は72回、血圧は120の80、呼吸数は16回です。
  // 補足情報としては明日ベッドの移動があります。

  // ## ルール
  // - 抽出した情報が文だった場合、文末を整える（例：「改善されており」→「改善されている」）
  // - 数字が入った情報は数字のみ抽出する（例:「1,000円」→「1,000」）

  // ## 項目
  // - 体温
  // - 脈拍
  // - 血圧上
  // - 血圧下
  // - 呼吸数
  // - 補足情報
  // `);
  //   console.log(response);

  return (
    <div>
      <PageTitle>実験</PageTitle>
      <div className="mt-4 space-y-2">
        <p>
          音声入力を活用することで入力速度や入力精度がどのように変化するのかを実験します。
        </p>
        <p>
          被験者の方には別端末で表示されている仮のバイタルサインを入力してもらいます。
        </p>
        <p>
          入力が完了した後に、使いやすさについてのアンケートに回答してもらいます。
        </p>
        <p>
          この工程を音声入力を使わずに行った場合と、音声入力を使った場合の2パターンで行います。
        </p>
      </div>
      <section className="mt-8">
        <h3 className="text-xl font-bold">あなたの実験結果</h3>
        <div className="mt-4">
          <ExperimentResultTable />
        </div>
      </section>
      <div className="mt-12 flex justify-center">
        <DynamicExperimentNavigatorButton />
      </div>
    </div>
  );
}
