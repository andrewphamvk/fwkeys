import { Box, Text } from '@chakra-ui/layout'
import {
  Flex
} from '@chakra-ui/react'
import React from 'react'
import { useTimer } from 'react-use-precision-timer'

type TypingSpeedProps = {
  allTypedEntries: number,
}

const TypingSpeed = (props: TypingSpeedProps) => {
  const [wpm, setWpm] = React.useState(0)

  const refreshRateInMilliseconds = 200
  const timer = useTimer({
    delay: refreshRateInMilliseconds,
    callback: () => {
      // Simple algorithm to calculate WPM based on:
      // https://www.speedtypingonline.com/typing-equations#:~:text=Simply%20count%20all%20typed%20entries
      const words = props.allTypedEntries / 5
      const time = (timer.getElapsedStartedTime() / 60000)
      const newWpm = Math.trunc(words / time)
      setWpm(newWpm)
    }
  })

  React.useEffect(() => {
    timer.start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box borderTopWidth="1px" borderBottomWidth="1px" padding="10px 5px 10px 5px" >
      <Flex direction="column">
        <Text fontSize="lg" fontWeight="normal">Speed: {wpm}</Text>
      </Flex>
    </Box>
  )
}

export default TypingSpeed