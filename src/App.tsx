import React from 'react'

import Header from './components/header/Header'
import Display from './components/display/Display'
import Keyboard from './components/keyboard/Keyboard'
import BackgroundInput from './components/backgroundInput/BackgroundInput'
import TypingSpeed from './components/typingSpeed/TypingSpeed'
import { Center, Flex, Grid, VStack } from '@chakra-ui/react'

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
  // const [keyEvent, setKeyEvent] = React.useState(new React.FocusEvent<HTMLInputElement>())

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

  // When app loads, set the focus to the background input
  React.useEffect(() => shiftFocus(null), [])

  return (
    <Center>
      <Grid width="800px" overflow="hidden">
        <Header />
        <TypingSpeed allTypedEntries={typingState.allTypedEntries} />
        <Display keyPressed={lastKeyPressed} typingDispatch={typingDispatch} />
        <Keyboard activeKeyMap={activeKeyMap} />
        <BackgroundInput inputRef={backgroundInputElement} onBlur={shiftFocus} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
      </Grid>
    </Center>
  )
}

export default App
