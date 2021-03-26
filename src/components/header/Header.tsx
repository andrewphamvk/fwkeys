import { ReactComponent as KeyBoard } from '../../svg/twemoji.svg'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.container}>
      <KeyBoard width="64px" height="64px" style={{ display: "block", margin: "auto" }} />
      <h1 className={styles.title}>fwkeys</h1>
    </div>
  )
}

export default Header