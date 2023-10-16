import { ModeToggle } from '@/components/mode-toggle';
import { PageSelect } from './page-select';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 py-4 border-b border-b-border">
      <h1 className="font-heading text-lg md:text-xl">Hospital Smarter</h1>
      <div className="flex flex-0 gap-1">
        <ModeToggle />
        <PageSelect />
      </div>
    </header>
  );
};
