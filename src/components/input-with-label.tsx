import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function InputWithLabel({ id, label, ...inputProps }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
}
