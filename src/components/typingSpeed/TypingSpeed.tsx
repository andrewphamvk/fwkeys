import React from 'react'
import { useTimer } from 'react-use-precision-timer'
import styles from './typing-speed.module.css'

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
  }, [])

  return (
    <div className={styles.container}>
      Speed: {wpm}
    </div>
  )
}

export default TypingSpeed