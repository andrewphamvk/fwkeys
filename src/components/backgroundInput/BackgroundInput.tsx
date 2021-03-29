import React from 'react'

interface IBackgroundInputTextProps {
  inputRef: React.RefObject<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>,
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>
}

const BackgroundInput = ({ inputRef, onBlur, onKeyDown, onKeyUp }: IBackgroundInputTextProps) => {
  return (
    <div style={{ position: "absolute", overflow: "hidden" }}>
      <input
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-hidden="true"
        style={{ width: "0em", height: "0em", padding: "0", margin: "0", border: "none", outline: "none" }}
      />
    </div>
  )
}

export default BackgroundInput