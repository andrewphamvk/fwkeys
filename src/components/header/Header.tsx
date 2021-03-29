import {
  Button,
  useColorMode
} from '@chakra-ui/react'
import { ReactComponent as KeyBoard } from '../../svg/twemoji.svg'
import styles from './header.module.css'


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.container}>
      <KeyBoard width="64px" height="64px" style={{ display: "block", margin: "auto" }} />
      <h1 className={styles.title}>fwkeys</h1>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  )
}

export default Header