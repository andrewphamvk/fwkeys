import React from 'react'

import Header from './header/Header'
import TextDisplay from './display/Display'
import Keyboard from './keyboard/Keyboard'
import BackgroundInput from './backgroundInput/BackgroundInput'
import TypingSpeedMetrics from './typingSpeed/TypingSpeed'
import {
  Center,
  Grid,
} from '@chakra-ui/react'

type TypingState = {
  allTypedEntries: number
}

type TypingAction =
  | { type: 'increment_typed_entries' }

const typingReducer = (state: TypingState, action: TypingAction): TypingState => {
  switch (action.type) {
    case 'increment_typed_entries':
      return { ...state, allTypedEntries: state['allTypedEntries'] + 1 }
    default:
      throw new Error("Unknown action")
  }
}

type KeyPressEvent = {
  key: string
}

function App() {
  const backgroundInputElement = React.useRef<HTMLInputElement>(null)
  const [activeKeyMap, setActiveKeyMap] = React.useState(new Set<string>())
  const [lastKeyPressed, setLastKeyPressed] = React.useState<KeyPressEvent>({ key: "" })
  const [typingState, typingDispatch] = React.useReducer(typingReducer, { allTypedEntries: 0 })

  // When keys are pressed, add it to the key map
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent tab from escaping the application
    if (event.key === "Tab") {
      event.preventDefault()
    }

    setLastKeyPressed({ key: event.key })
    setActiveKeyMap(new Set(activeKeyMap).add(event.code))
  }

  // When keys are released, remove it from the key map
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    activeKeyMap.delete(event.code)
    setActiveKeyMap(new Set(activeKeyMap))
  }

  // Set the focus of the application to the background input
  const shiftFocus = (event: React.FocusEvent<HTMLInputElement> | null) => {
    // Run the method with setTimeout to fix issue in FireFox
    setTimeout(() => {
      setActiveKeyMap(new Set())
      if (backgroundInputElement != null && backgroundInputElement.current != null) {
        backgroundInputElement.current.focus({ preventScroll: true })
      }
    })
  }

  // When app loads, set the focus to the background input
  React.useEffect(() => shiftFocus(null), [])

  return (
    <Center>
      <Grid width="800px" overflow="hidden">
        <Header />
        <TypingSpeedMetrics allTypedEntries={typingState.allTypedEntries} />
        <TextDisplay keyPressed={lastKeyPressed} typingDispatch={typingDispatch} />
        <Keyboard activeKeyMap={activeKeyMap} />
        <BackgroundInput inputRef={backgroundInputElement} onBlur={shiftFocus} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
      </Grid>
    </Center>
  )
}

export default App
