import { useTrackedState } from '../store'

export const useGetKeyPress = () => {
  const state = useTrackedState()
  return state.keyPress
}