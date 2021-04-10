import { useTrackedState } from "../store";

export const useGetTypingState = () => {
  const state = useTrackedState();
  return state.typingState;
};
