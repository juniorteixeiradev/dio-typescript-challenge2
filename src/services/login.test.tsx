import { login } from "./login";

describe("Login component test", () => {
  it("Deve retornar mensagem Bem vindo!", () => {
    const mockAlert = jest.fn();
    login(mockAlert);

    expect(mockAlert).toHaveBeenCalledWith("Logado com sucesso, seja bem vindo !");
  });
});
