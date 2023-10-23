import { Header } from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';

export default function ExperimentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header actions={<ModeToggle />} />
      <main className="max-w-screen-md mx-auto py-8 px-4">{children}</main>
    </>
  );
}
