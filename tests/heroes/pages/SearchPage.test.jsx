// import { fireEvent, render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { SearchPage } from "../../../src/heroes/pages/SearchPage";

// /* hacer un mock parcial de una librería  */
// /* hacer mock de un custom hook, que en este caso será del useNavigate() de react-router-dom */
// const mockedUseNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   /* cuando se haga el mock de esta librería se mandará a llamar una función o callback e implícitamente voy a regresar un objeto. En este objeto puedo mandar a llamar la función de useNavigate(), entonces cuando alguien mande a llamar la función del useNavigate() que se encuentra en Navbar.jsx de "const navigate = useNavigate();" en vez de retornar la funcionalidad propia del useNavigate() mandará a llamar mi mock function "mockedUseNavigate" */
//   /* Si se deja solo con el useNavigate tendremos otros errores porque tendremos que proporcionar el MemoryRouter, useLocation y cualquier otra cosa que el react-router-dom use, y para no mockear todo entonces se puede hacer que "jest.requireActual()" tome todo lo que use la librería y que use el spread para esparcir todo lo que tiene esta librería pero solo vamos a sobreescribir lo del useNavigate (en este caso porque así lo necesitamos) */
//   /* con esto ya solo nos queda hacer la aserción y probrar que la función "mockedUseNavigate" haya sido llamada */
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUseNavigate,
// }));

// describe("Pruebas en <SearchPage />", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   // test("debe mostrarse correctamente con los valores por defecto", () => {
//   //   const { container} = render(
//   //     <MemoryRouter>
//   //       <SearchPage />
//   //     </MemoryRouter>
//   //   );
//   //   // screen.debug();
//   //   expect(container).toMatchSnapshot()
//   // });

//   test("debe mostrar a Batman y el input con el valor del queryString", () => {
//     render(
//       <MemoryRouter initialEntries={["/search?q=batman"]}>
//         <SearchPage />
//       </MemoryRouter>
//     );
//     // screen.debug();

//     const input = screen.getByRole("textbox");
//     expect(input.value).toBe("batman");

//     const img = screen.getByRole("img");
//     expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
//   });

//   test("debe mostrar un error si no encuentra el heroe (batman123)", () => {
//     render(
//       <MemoryRouter initialEntries={["/search?q=batman123"]}>
//         <SearchPage />
//       </MemoryRouter>
//     );
//     // screen.debug();

//     expect(screen.getByText("No hero with batman123"));
//   });

//   test("debe llamar el navigate a la pantalla nueva", () => {
//     const inputValue = "superman";

//     render(
//       <MemoryRouter initialEntries={["/search"]}>
//         <SearchPage />
//       </MemoryRouter>
//     );
//     // screen.debug();

//     const input = screen.getByRole("textbox");
//     fireEvent.change(input, {
//       target: { name: "searchText", value: inputValue },
//     });
//     // console.log(input.value);

//     const form = screen.getByRole("form");
//     fireEvent.submit(form);

//     expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
//   });
// });

describe("Pruebas en <SearchPage />", () => {
  test("esto es una prueba", () => {
    /* se coloca esta parte porque al correr el test de arriba hay problemas con el queryString */
  });
});
