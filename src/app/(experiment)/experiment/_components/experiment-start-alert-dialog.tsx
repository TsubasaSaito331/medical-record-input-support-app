import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ExperimentStartAlertDialog = ({ open, onClose }: Props) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>実験を開始しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            実験を開始すると、時間計測が始まります。
            <br />
            準備ができたら「開始」ボタンを押してください。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>開始</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
