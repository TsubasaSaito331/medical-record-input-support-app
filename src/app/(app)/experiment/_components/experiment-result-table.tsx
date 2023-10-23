'use client';
/**
 * NOTE: Hydration Errorが出ているので対応を待つ:
 * ref: https://github.com/shadcn-ui/ui/issues/1577
 */

import { useSessionStorage } from 'react-use';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ExperimentEval } from '@/constants/experiment';
import { EXPERIMENT_EVAL_KEY } from '@/constants/experiment';

export const ExperimentResultTable = () => {
  const [modiSyncEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.MODI_SYNC,
  );
  const [refSyncEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.REF_SYNC,
  );
  const [usingChatGPTEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.USING_CHAT_GPT,
  );

  if (!modiSyncEval && !refSyncEval && !usingChatGPTEval) {
    return <p>実験結果はありません</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>手法</TableHead>
          <TableHead>使いやすさ</TableHead>
          <TableHead>所要時間</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Modi Sync</TableCell>
          <TableCell>{modiSyncEval?.easeOfUse || '-'}</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ref Sync</TableCell>
          <TableCell>{refSyncEval?.easeOfUse || '-'}</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Using ChatGPT</TableCell>
          <TableCell>{usingChatGPTEval?.easeOfUse || '-'}</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
