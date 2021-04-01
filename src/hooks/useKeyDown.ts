import { useCallback } from 'react'
import { useSetDraft } from '../store'

export const useKeyDown = () => {
  const setDraft = useSetDraft()
  return useCallback(
    (key: string) => {
      setDraft(draft => {
        draft.activeKeys.add(key)
        draft.keyPress = { key: key }
      })
    },
    [setDraft]
  )
}