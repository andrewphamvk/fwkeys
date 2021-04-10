import { useState, useCallback } from "react";
import { createContainer } from "react-tracked";
import produce, { Draft, enableMapSet } from "immer";

enableMapSet();

type KeyPress = {
  key: string;
  code: string;
};

type TypingState = {
  allTypedEntries: number;
};

export type State = {
  keyPress: KeyPress;
  activeKeys: Set<string>;
  lastWpm: number;
  typingState: TypingState;
};

const initialState: State = {
  keyPress: { key: "", code: "" },
  activeKeys: new Set(),
  lastWpm: 0,
  typingState: {
    allTypedEntries: 0,
  },
};

const {
  Provider,
  useTrackedState,
  useUpdate: useSetState,
} = createContainer(() => useState(initialState));

const useSetDraft = () => {
  const setState = useSetState();
  return useCallback(
    (draftUpdater: (draft: Draft<State>) => void) => {
      setState(produce(draftUpdater));
    },
    [setState]
  );
};

export { Provider, useTrackedState, useSetDraft };
