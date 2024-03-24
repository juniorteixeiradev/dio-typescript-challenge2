import { Card, CardHeader, CardBody, Flex } from "@chakra-ui/react";

import Inputs from "./Input";
import Buttons from "./Button";
import Header from "./Header/Header";
import Footer from "./Footer";
export default function Cards() {
  return (
    <Card justify="center" align="center" p="0.5rem">
      <CardHeader>
        <Header />
      </CardHeader>

      <CardBody>
        <Flex gap="1rem" justify="center" align="center" flexDirection="column">
          <Inputs type="text" title="Email:" />
          <Inputs type="password" title="Senha:" />
          <Buttons></Buttons>
        </Flex>
      </CardBody>
      <Footer />
    </Card>
  );
}
