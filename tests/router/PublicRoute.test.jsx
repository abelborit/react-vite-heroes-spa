import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("si NO estoy autenticado debe mostrar el children que es la página del login", () => {
    const contextValue = {
      authState: { logged: false, user: null },
    };
    // console.log(contextValue);

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Este es el children que es la página del login</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(
      screen.getByText("Este es el children que es la página del login")
    ).toBeTruthy();
  });

  test("si estoy autenticado debe navegar a Página de Marvel", () => {
    const contextValue = {
      authState: { logged: true, user: { id: 1, name: "Abel Borit" } },
    };
    // console.log(contextValue);

    /* para hacer testing usando react-router-dom, este nos proporciona el <MemoryRouter></MemoryRouter> que sirve como el <BrowserRouter></BrowserRouter> pero en el testing, y con esto ya no habrían problemas de useLocataion() y otros hooks propios de react-router-dom */

    /* initialEntries={} espera un arreglo el cual es el segmento de la URL en el que me encuentro, que en este caso es en login */
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          {/* aquí se tiene que colocar mínimo dos rutas, una que es la ruta del login y la otra es a dónde yo quiero navegar, ya que si solo se coloca la ruta del login se creará un ciclo infinito en el test porque siempre estará entrando y saliendo porque solo hay una ruta. Una vez que se cree la segunda ruta, entonces entrará al login, verá que el usuario ya está logeado y se pasará a la segunda ruta que en este caso es la de marvel */}
          <Routes>
            <Route
              /* se coloca esta ruta ya que es en dónde me encuentro */
              path="login"
              element={
                <PublicRoute>
                  <h1>Este es el children que es la página del login</h1>
                </PublicRoute>
              }
            />

            <Route
              path="marvel"
              element={<h1>Este es el children que es la página de Marvel</h1>}
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(
      screen.getByText("Este es el children que es la página de Marvel")
    ).toBeTruthy();
  });
});
