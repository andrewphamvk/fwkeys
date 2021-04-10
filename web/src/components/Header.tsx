import {
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  useColorMode,
  Heading
} from '@chakra-ui/react'
import { ReactComponent as KeyBoard } from '../svg/twemoji.svg'


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <SimpleGrid textAlign="center" columns={3} p="20px 8px 20px 8px">
      <Flex align="center">
        <KeyBoard width="64px" height="64px" />
      </Flex>

      <Flex align="center">
        <Spacer />
        <Heading color="#d87093" fontWeight="semibold">fwkeys</Heading>
        <Spacer />
      </Flex>

      <Flex align="center">
        <Spacer />
        <Button onClick={toggleColorMode} colorScheme="blue">
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>

    </SimpleGrid>
  )
}

export default Header