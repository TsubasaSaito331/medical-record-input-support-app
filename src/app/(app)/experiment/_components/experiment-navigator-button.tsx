'use client';

import Link from 'next/link';
import { useSessionStorage } from 'react-use';

import { Button } from '@/components/ui/button';
import type { ExperimentEval } from '@/constants/experiment';
import {
  EXPERIMENT_EVAL_KEY,
  EXPERIMENT_TARGET_PATH,
  EXPERIMENT_TARGET_PATHS,
} from '@/constants/experiment';

function ExperimentNavigatorButton() {
  const [modiSyncEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.MODI_SYNC,
  );
  const [refSyncEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.REF_SYNC,
  );
  const [usingChatGPTEval] = useSessionStorage<ExperimentEval | undefined>(
    EXPERIMENT_EVAL_KEY.USING_CHAT_GPT,
  );

  const nextExperimentPagePath = (() => {
    /* まだ終わっていない実験のパスのリスト **/
    const targetPaths = EXPERIMENT_TARGET_PATHS.filter((path) => {
      const ignorePaths = [];
      if (modiSyncEval !== undefined) {
        ignorePaths.push(EXPERIMENT_TARGET_PATH.MODI_SYNC);
      }
      if (refSyncEval !== undefined) {
        ignorePaths.push(EXPERIMENT_TARGET_PATH.REF_SYNC);
      }
      if (usingChatGPTEval !== undefined) {
        ignorePaths.push(EXPERIMENT_TARGET_PATH.USING_CHAT_GPT);
      }
      return !ignorePaths.includes(path);
    });

    if (targetPaths.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * targetPaths.length);
    const nextPath = targetPaths[randomIndex];
    return nextPath;
  })();

  if (nextExperimentPagePath === undefined) {
    return (
      <Button size="lg" variant="destructive" asChild>
        <Link href="/">実験を終了する</Link>
      </Button>
    );
  }

  if (!modiSyncEval && !refSyncEval && !usingChatGPTEval) {
    return (
      <Button size="lg" asChild>
        <Link href={nextExperimentPagePath}>実験を始める</Link>
      </Button>
    );
  } else {
    return (
      <Button size="lg" asChild>
        <Link href={nextExperimentPagePath}>実験を続ける</Link>
      </Button>
    );
  }
}

export default ExperimentNavigatorButton;
