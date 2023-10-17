import { Header } from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export default function ExperimentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        actions={
          <div className="flex flex-0 gap-1">
            <ModeToggle />
            <Button>送信</Button>
          </div>
        }
      />
      <main className="max-w-screen-md mx-auto py-8 px-4">{children}</main>
    </>
  );
}
