import { Input, Text, Flex } from "@chakra-ui/react";

interface Iinput {
  type?: "text" | "password" | "email";
  title?: string;
  onClick?: () => void;
  htmlFor?: string;
  placeholder?: string;
}

export default function Inputs(props: Iinput) {
  return (
    <Flex flexDir="column" gap="0.3rem">
      <Text fontSize="sm">{props.title}</Text>
      <Input placeholder={props.title} w="20rem" required />
    </Flex>
  );
}
