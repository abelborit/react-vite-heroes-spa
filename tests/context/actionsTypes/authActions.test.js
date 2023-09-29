import { TYPES } from "../../../src/context/actionsTypes/authActions";

describe("Pruebas en authActions", () => {
  test("debe regresar los siguientes TYPES", () => {
    // console.log(TYPES);

    expect(TYPES).toEqual({
      LOGIN: "[AUTH] Login",
      LOGOUT: "[AUTH] Logout",
    });
  });
});
