import { useTrackedState } from '../store'

export const useKeyDown = () => {
  const state = useTrackedState()
  return state.activeKeys
}