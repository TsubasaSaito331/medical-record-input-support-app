import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 leading-relaxed">
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
        <Button size="lg" variant="secondary">
          実験を行う
        </Button>
        <Button size="lg">試してみる</Button>
      </div>
    </div>
  );
}
