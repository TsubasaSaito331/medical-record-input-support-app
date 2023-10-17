import { Button } from './ui/button';
import { Mic } from 'lucide-react';

export const RecordingButton = () => {
  return (
    <Button variant="outline" size="icon" className="rounded-full">
      <Mic className="h-4 w-4" />
    </Button>
  );
};
