import React from 'react'

import Header from './Header'
import TextDisplay from './Display'
import Keyboard from './Keyboard'
import BackgroundInput from './BackgroundInput'
import TypingSpeedMetrics from './TypingSpeed'
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
  const [activeKeyMap, setActiveKeyMap] = React.useState(new Set<string>())
  const [lastKeyPressed, setLastKeyPressed] = React.useState<KeyPressEvent>({ key: "" })
  const [typingState, typingDispatch] = React.useReducer(typingReducer, { allTypedEntries: 0 })

  return (
    <Center>
      <Grid width="800px" overflow="hidden">
        <Header />
        <TypingSpeedMetrics allTypedEntries={typingState.allTypedEntries} />
        <TextDisplay />
        <Keyboard />
        <BackgroundInput />
      </Grid>
    </Center>
  )
}

export default App
