import { Header } from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { PageSelect } from '@/components/page-select';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        actions={
          <div className="flex flex-0 gap-1">
            <ModeToggle />
            <PageSelect />
          </div>
        }
      />
      <main className="max-w-screen-md mx-auto py-8 px-4">{children}</main>
    </>
  );
}
