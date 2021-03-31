import { VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

interface IBackgroundInputTextProps {
  inputRef: React.RefObject<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>,
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>
}

const BackgroundInput = ({ inputRef, onBlur, onKeyDown, onKeyUp }: IBackgroundInputTextProps) => {
  return (
    <VisuallyHidden>
      <input type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-hidden="true"
      />
    </VisuallyHidden>
  )
}

export default BackgroundInput