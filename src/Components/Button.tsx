import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";

// interface IButton {
//   onClick?: () => void
//   children?: string
// }

export default function Buttons() {
  const [buttonloading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setTimeout(() => {
      login(() => alert("Logado com sucesso, seja bem vindo !"));
    }, 1000);
  };
  return (
    <>
      {!buttonloading && (
        <Button colorScheme="teal" onClick={handleClick} variant="outline">
          Logar!
        </Button>
      )}

      {buttonloading && (
        <Button
          isLoading
          loadingText="Logando"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      )}
    </>
  );
}
