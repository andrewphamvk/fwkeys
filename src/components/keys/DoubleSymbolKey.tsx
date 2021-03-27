import * as Constants from '../../constants/constants'
import styles from './keys.module.css'

type DoubleSymbolKeyProps = {
  x: string | number,
  y: string | number,
  width?: string | number,
  topText: string,
  botText: string,
  isActive?: boolean
}

const DoubleSymbolKey = (props: DoubleSymbolKeyProps) => {
  return (
    <svg
      className={props.isActive ? styles.active : styles.key}
      x={props.x}
      y={props.y}
      height={Constants.KeyHeight}
      width={props.width ?? Constants.KeyWidth}>

      <rect
        height="100%"
        width="100%"
        rx={Constants.KeyRx}
        ry={Constants.KeyRy}
        fill={Constants.KeyFill} />

      <text
        className={styles.secondary}
        x="50%"
        y={Constants.TopKeyY}
        fill="white">
        {props.topText}
      </text>

      <text
        className={styles.secondary}
        x="50%"
        y={Constants.BotKeyY}
        fill="white">
        {props.botText}
      </text>

    </svg>
  )
}

export default DoubleSymbolKey