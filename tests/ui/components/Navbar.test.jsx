import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";

/* hacer un mock parcial de una librería  */
/* hacer mock de un custom hook, que en este caso será del useNavigate() de react-router-dom */
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  /* cuando se haga el mock de esta librería se mandará a llamar una función o callback e implícitamente voy a regresar un objeto. En este objeto puedo mandar a llamar la función de useNavigate(), entonces cuando alguien mande a llamar la función del useNavigate() que se encuentra en Navbar.jsx de "const navigate = useNavigate();" en vez de retornar la funcionalidad propia del useNavigate() mandará a llamar mi mock function "mockedUseNavigate" */
  /* Si se deja solo con el useNavigate tendremos otros errores porque tendremos que proporcionar el MemoryRouter, useLocation y cualquier otra cosa que el react-router-dom use, y para no mockear todo entonces se puede hacer que "jest.requireActual()" tome todo lo que use la librería y que use el spread para esparcir todo lo que tiene esta librería pero solo vamos a sobreescribir lo del useNavigate (en este caso porque así lo necesitamos) */
  /* con esto ya solo nos queda hacer la aserción y probrar que la función "mockedUseNavigate" haya sido llamada */
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
  const contextValue = {
    authState: {
      logged: true,
      user: { id: 1, name: "Abel Borit" },
    },
    logout: jest.fn(),
  };
  // console.log(contextValue);

  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el nombre del usuario", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("Abel Borit")).toBeTruthy();
  });

  test("debe llamar el logout y navigate cuando se hace click al botón del logout", () => {
    /* se tiene que hacer el mock de la función navigate porque quiero simular que esa función ha sido llamada, y esa función es llamada basándose en el hook useNavigate() de react-router-dom */

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    /* si se le pasa argumentos entonces se puede utilizar .toHaveBeenCalledWith() y primero forzar el error y ver qué argumentos trae para luego mandarlos a llamar de forma correcta*/
    // expect(mockedUseNavigate).toHaveBeenCalledWith();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
