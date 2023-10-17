'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

/** page-selectが表示されるペース */
const pageSelectPaths = [
  '/',
  '/experiment',
  '/modi-sync',
  '/ref-sync',
  '/using-chatgpt',
];

export const PageSelect = () => {
  const router = useRouter();
  const pathName = usePathname();

  const onValueChange = (value: string) => {
    if (value === pathName) return;

    router.push(value);
  };

  if (!pageSelectPaths.includes(pathName)) {
    return null;
  }

  return (
    <Select value={pathName} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="/">トップページ</SelectItem>
        <SelectItem value="/experiment">実験</SelectItem>
        {pathName !== '/experiment' ? (
          <>
            <SelectItem value="/modi-sync">修正による連携</SelectItem>
            <SelectItem value="/ref-sync">参照による連携</SelectItem>
            <SelectItem value="/using-chatgpt">ChatGPTの活用</SelectItem>
          </>
        ) : null}
      </SelectContent>
    </Select>
  );
};
