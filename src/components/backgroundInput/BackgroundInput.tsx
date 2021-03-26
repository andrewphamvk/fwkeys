import React from 'react'
import styles from './background-input.module.css'

interface IBackgroundInputTextProps {
  inputRef: React.RefObject<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>,
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>
}

const BackgroundInput = ({ inputRef, onBlur, onKeyDown, onKeyUp }: IBackgroundInputTextProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-hidden="true" />
    </div>
  )
}

export default BackgroundInput