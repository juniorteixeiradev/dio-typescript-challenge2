import "./App.css";
import Layout from "./Components/Layout";

import { ChakraProvider } from "@chakra-ui/react";
import Cards from "./Components/Card";
function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Cards />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
