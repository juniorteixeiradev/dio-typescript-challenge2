import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
interface ILayout {
  children?:string | ReactElement
}
export default function Layout(props:ILayout) {
  return (
    <Flex
    background='#8075ff'
      flexDirection="column"
      align="center"
      justify="center"
      h="100vh"
      w='100vw'
      gap="0.5rem"
    >
      {props.children}
    </Flex>
  );
}
