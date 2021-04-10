import { useCallback } from 'react'
import { useSetDraft } from '../store'

export const useKeyDown = () => {
  const setDraft = useSetDraft()
  return useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      setDraft(draft => {
        if (event.key === "Tab") {
          event.preventDefault()
        }

        draft.activeKeys.add(event.key)
        draft.keyPress = { key: event.key, code: event.code }
      })
    },
    [setDraft]
  )
}