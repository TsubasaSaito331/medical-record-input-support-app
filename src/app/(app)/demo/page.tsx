import Link from 'next/link';

import { PageTitle } from '@/components/page-title';
import { Button } from '@/components/ui/button';

export default function Experiment() {
  return (
    <div>
      <PageTitle>デモ</PageTitle>
      <div className="mt-4 space-y-2">
        <p>デモページです。</p>
        <p>
          音声入力を活用することで入力速度や入力精度がどのように変化するのかをデモできます。
        </p>
        <p>仮のバイタルサインを入力してもらいます。</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button size="lg" asChild>
          <Link href="/demo/manual-input">従来の入力（手動入力）</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/demo/simple-voice-input">項目別の音声入力</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/demo/using-chat-gpt">項目横断的な音声入力</Link>
        </Button>
      </div>
    </div>
  );
}
