import {
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import { ReactComponent as KeyBoard } from '../../svg/twemoji.svg'
import styles from './header.module.css'


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <SimpleGrid textAlign="center" columns={3} p="20px 8px 20px 8px">
      <Flex align="center">
        <KeyBoard width="64px" height="64px" />
      </Flex>

      <Flex align="center">
        <Spacer />
        <h1 className={styles.title}>fwkeys</h1>
        <Spacer />
      </Flex>

      <Flex align="center">
        <Spacer />
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>

    </SimpleGrid>
  )
}

export default Header