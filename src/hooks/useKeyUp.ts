import { useCallback } from 'react'
import { useSetDraft } from '../store'

export const useKeyUp = () => {
  const setDraft = useSetDraft()
  return useCallback(
    (key: string) => {
      setDraft(draft => {
        draft.activeKeys.delete(key)
      })
    },
    [setDraft]
  )
}