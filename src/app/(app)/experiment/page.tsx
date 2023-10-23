import dynamic from 'next/dynamic';

import { PageTitle } from '@/components/page-title';

import { ExperimentResultTable } from './_components/experiment-result-table';

// 乱数を使って次のページを決定するので、SSRを無効化する
const DynamicExperimentNavigatorButton = dynamic(
  () => import('./_components/experiment-navigator-button'),
  { ssr: false },
);

export default function Experiment() {
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
        <h3 className="font-bold text-xl">あなたの実験結果</h3>
        <div className="mt-4">
          <ExperimentResultTable />
        </div>
      </section>
      <div className="flex justify-center mt-12">
        <DynamicExperimentNavigatorButton />
      </div>
    </div>
  );
}
