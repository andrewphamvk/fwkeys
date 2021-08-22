import { useCallback } from "react";
import { useSetDraft } from "../store";

export const useKeyUp = () => {
  const setDraft = useSetDraft();
  return useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      setDraft((draft) => {
        draft.activeKeys.delete(event.code);
      });
    },
    [setDraft]
  );
};
