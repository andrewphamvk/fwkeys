import { useCallback } from "react";
import { useSetDraft } from "../store";

export const useTypedEntries = () => {
  const setDraft = useSetDraft();
  const incrementTypedEntry = useCallback(() => {
    setDraft((draft) => {
      draft.typingState.allTypedEntries += 1;
    });
  }, [setDraft]);
  return { incrementTypedEntry };
};
