import { useTrackedState } from "../store";

export const useGetActiveKeys = () => {
  const state = useTrackedState();
  return state.activeKeys;
};
