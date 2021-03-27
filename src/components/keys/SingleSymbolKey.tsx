import * as Constants from '../../constants/constants'
import styles from './keys.module.css'

type SingleSymbolKeyProps = {
  x: string | number,
  y: string | number,
  width?: string | number,
  text?: string,
  textX?: string | number,
  isActive?: boolean
}

const SingleSymbolKey = (props: SingleSymbolKeyProps) => {
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
        className={styles.primary}
        x={props.textX ?? "50%"}
        y={Constants.MidKeyY}
        fill="white">
        {props.text}
      </text>

    </svg>
  )
}

export default SingleSymbolKey