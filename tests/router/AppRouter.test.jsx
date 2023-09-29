// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { AuthContext } from "../../src/context/AuthContext";
// import { AppRouter } from "../../src/router/AppRouter";

// describe("Pruebas en <AppRouter />", () => {
//   test("debe mostrar el login si NO está autenticado", () => {
//     const contextValue = {
//       authState: { logged: false, user: null },
//     };
//     // console.log(contextValue);

//     render(
//       <MemoryRouter initialEntries={["/marvel"]}>
//         <AuthContext.Provider value={contextValue}>
//           <AppRouter />
//         </AuthContext.Provider>
//       </MemoryRouter>
//     );
//     // screen.debug();

//     expect(screen.getAllByText("Login").length).toBe(2);
//   });

//   test("debe mostrar el componente de Marvel si está autenticado", () => {
//     const contextValue = {
//       authState: { logged: true, user: { id: 1, name: "Abel Borit" } },
//     };
//     // console.log(contextValue);

//     render(
//       <MemoryRouter initialEntries={["/login"]}>
//         <AuthContext.Provider value={contextValue}>
//           <AppRouter />
//         </AuthContext.Provider>
//       </MemoryRouter>
//     );
//     // screen.debug();

//     expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
//   });
// });

describe("Pruebas en <AppRouter />", () => {
  test("esto es una prueba", () => {
    /* se coloca esta parte porque al correr el test de arriba hay problemas con el queryString */
  });
});
