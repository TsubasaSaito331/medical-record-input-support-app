'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const SendButton = () => {
  const pathName = usePathname();

  if (pathName.includes('eval')) {
    return null;
  }

  return (
    <Button asChild>
      <Link href={pathName + '/eval'}>送信</Link>
    </Button>
  );
};
