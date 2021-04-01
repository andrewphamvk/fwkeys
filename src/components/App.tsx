import Header from './Header'
import TextDisplay from './TextDisplay'
import Keyboard from './Keyboard'
import BackgroundInput from './BackgroundInput'
import TypingSpeed from './TypingSpeed'
import { Center, Grid } from '@chakra-ui/react'

function App() {
  return (
    <Center>
      <Grid width="800px" overflow="hidden">
        <Header />
        <TypingSpeed />
        <TextDisplay />
        <Keyboard />
        <BackgroundInput />
      </Grid>
    </Center>
  )
}

export default App
