import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en <PrivateRoute />", () => {
  test("si estoy autenticado debe mostrar el children que es la Página de los hérores", () => {
    /* para simular la función del localStorage en el testing */
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      authState: { logged: true, user: { id: 1, name: "Abel Borit" } },
    };
    // console.log(contextValue);

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Este es el children que es la página de los héroes</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(
      screen.getByText("Este es el children que es la página de los héroes")
    ).toBeTruthy();

    /* mandar a llamar al localStorage */
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
