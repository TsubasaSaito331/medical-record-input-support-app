import { X } from 'lucide-react';
import type { ComponentPropsWithRef } from 'react';

import { Button } from './ui/button';
import { Input } from './ui/input';

interface Props extends ComponentPropsWithRef<'input'> {
  onRemove: () => void;
}

export const RemovableInput = ({
  value,
  onChange,
  onRemove,
  ...props
}: Props) => {
  return (
    <div className="flex gap-2">
      <Input value={value} onChange={onChange} className="flex-1" {...props} />
      <Button variant="ghost" size="icon" onClick={onRemove}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
