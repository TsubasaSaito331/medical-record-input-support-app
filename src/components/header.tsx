import Link from 'next/link';

// import { ModeToggle } from '@/components/mode-toggle';
// import { PageSelect } from './page-select';

export const Header = ({
  actions,
}: {
  actions?: React.ReactNode;
} = {}) => {
  return (
    <header className="flex items-center justify-between px-2 py-4 border-b border-b-border">
      <Link href="/">
        <h1 className="font-heading text-lg md:text-xl font-bold">
          Hospital Smarter
        </h1>
      </Link>
      {actions}
      {/* <div className="flex flex-0 gap-1">
        <ModeToggle />
        <PageSelect />
      </div> */}
    </header>
  );
};
