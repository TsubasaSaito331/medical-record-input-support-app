import { PageTitle } from '@/components/page-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
        <p className="mt-2">まだ実験結果はありません。</p>
      </section>
      <div className="flex justify-center mt-12">
        <Button size="lg" asChild>
          {/* TODO: ランダムな実験ページに移動 */}
          <Link href="/experiment/modi-sync">実験を始める</Link>
        </Button>
      </div>
    </div>
  );
}
