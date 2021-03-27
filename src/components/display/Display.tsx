import React from 'react'
import styles from './display.module.css'

// Split a string into lines of maxLineLength
function splitLines(input: string, maxLineLength: number) {
  const lines: string[][] = [[]]
  let currentLine = 0
  let currentLineLength = 0
  input.split(" ").forEach(word => {
    if ((currentLineLength + word.length + 1) > maxLineLength) {
      currentLine += 1
      currentLineLength = 0
    }
    if (lines[currentLine] == null) {
      lines[currentLine] = []
    }
    lines[currentLine].push(word + " ")
    currentLineLength += word.length + 1
  })
  return lines
}

// Generate the JSX elements to render 
const generateRenderLines = (lines: string[][], cursorIndex: number): JSX.Element => {
  let currentIndex = 0
  return (<>
    {lines.map((line, lineIndex) => <span key={lineIndex} className={styles.line}>
      {line.map((word, wordIndex) => <span key={wordIndex} className={styles.token}>
        {word.split("").map(ch => {
          let className = ""
          let id = ""
          if (currentIndex === cursorIndex) {
            id = styles.cursor
          }
          if (currentIndex < cursorIndex) {
            className = styles.symbol_valid
          }

          currentIndex += 1

          return (
            <span key={currentIndex - 1} id={id} className={className}>{ch}</span>
          )
        })}
      </span>)}
    </span>)}
  </>)
}

type KeyPress = {
  key: string
}

type DisplayProps = {
  keyPressed: KeyPress,
  typingDispatch: React.Dispatch<{
    type: "increment_typed_entries"
  }>
}

let nextInput = "thould predining befor ther have just thread and might submit lidzy any livil had the excely who prest sharly"
let input = "frez told volute her have later remonly coly wered recold othe exced you past for must saw wher betwen"

const Display = ({ keyPressed, typingDispatch }: DisplayProps) => {
  const [cursorIndex, setCursorIndex] = React.useState(0)
  const [renderLines, setRenderLines] = React.useState(<></>)
  const [cursorBlink, setCursorBlink] = React.useState(false)
  const cursorRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!cursorRef || !cursorRef.current) {
      return
    }
    var child = cursorRef.current.querySelector(`#${styles.cursor}`)
    if (!child) {
      return
    }

    let timer: NodeJS.Timeout
    if (cursorBlink) {
      child.classList.add(styles.blink)
    }
    else {
      child.classList.remove(styles.blink)
    }

    timer = setTimeout(() => setCursorBlink(prev => !prev), 500)
    return () => clearTimeout(timer)

  }, [cursorBlink, keyPressed]) // Monitor keyPressed so that spamming keys will keep cursor on

  const maxLineLength = 57

  // Check if key pressed is correct
  React.useEffect(() => {
    console.log(`keyPressed: ${keyPressed.key}`)
    setCursorBlink(true)
    if (input[cursorIndex] === keyPressed.key) {
      // If the correct key is pressed, deactivate blinker so that it can be activated after render lines generation
      setCursorBlink(false)
      typingDispatch({ type: 'increment_typed_entries' })
      if (cursorIndex === input.length - 1) {
        [input, nextInput] = [nextInput, input]
        setCursorIndex(0)
      }
      else {
        setCursorIndex(prev => prev + 1)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed])

  // Generate the display lines whenever the cursor updates
  React.useEffect(() => {
    const lines: string[][] = splitLines(input, maxLineLength)
    setRenderLines(generateRenderLines(lines, cursorIndex))
    setCursorBlink(true)
  }, [cursorIndex])

  return (
    <div className={styles.container} ref={cursorRef}>
      {renderLines}
    </div>
  )
}

export default Display
