import { useCallback } from 'react'
import { useSetDraft } from '../store'

export const useResetActiveKeys = () => {
  const setDraft = useSetDraft()
  return useCallback(
    () => {
      setDraft(draft => {
        draft.activeKeys = new Set<string>()
      })
    },
    [setDraft]
  )
}