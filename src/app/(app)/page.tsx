import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center leading-relaxed">
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
      <div className="flex gap-4 mt-20">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/experiment">実験を行う</Link>
        </Button>
        <Button size="lg">
          <Link href="/experiment">試してみる</Link>
        </Button>
      </div>
    </div>
  );
}
