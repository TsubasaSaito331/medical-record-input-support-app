import { Header } from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';

import { SendButton } from './experiment/_components/send-button';

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
            <SendButton />
          </div>
        }
      />
      <main className="max-w-screen-md mx-auto py-8 px-4">{children}</main>
    </>
  );
}
