import { Center, Text } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    <Center p="24px">
      <Text fontSize="sm" fontWeight="medium">
        Andrew Pham © {new Date().getFullYear()}
      </Text>
    </Center>
  );
};
