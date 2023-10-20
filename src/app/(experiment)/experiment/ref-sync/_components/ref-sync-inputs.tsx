import { RemovableInput } from '@/components/removable-input';
import type { PickUpPosition } from '@/hooks/useRefSync';

interface Props {
  originalText: string;
  pickUpPositions: PickUpPosition[];
  onChange: (value: string) => void;
}

export const RefSyncInputs = ({
  originalText,
  pickUpPositions,
  onChange,
}: Props) => {
  return (
    <div className="space-y-3">
      {pickUpPositions.map((position, index) => {
        return (
          <RemovableInput
            // NOTE: フォームのフォーカスをそのままにしたい為indexをkeyに入れている
            key={index}
            value={originalText.substring(
              position.startIndex,
              position.endIndex,
            )}
            onChange={(e) => {
              const text = originalText;
              const endIndex =
                position.endIndex - position.startIndex > e.target.value.length
                  ? position.startIndex + e.target.value.length + 1
                  : position.endIndex;

              const changedText =
                text.slice(0, position.startIndex) +
                e.target.value +
                text.slice(endIndex);
              onChange(changedText);
            }}
            onRemove={() => {
              const text = originalText;
              const removedText =
                text.slice(0, position.startIndex) +
                text.slice(position.endIndex);
              onChange(removedText);
            }}
          />
        );
      })}
    </div>
  );
};
