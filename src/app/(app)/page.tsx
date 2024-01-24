import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold leading-relaxed">
        音声入力を活用することで
        <br />
        日々の病院業務を効率化
      </h2>
      <Image
        src="hero.svg"
        width={320}
        height={320}
        alt="Hero"
        className="mt-10"
      />
      <div className="mt-20 flex gap-4">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/experiment">実験を行う</Link>
        </Button>
        <Button size="lg">
          <Link href="/demo">試してみる</Link>
        </Button>
      </div>
    </div>
  );
}
