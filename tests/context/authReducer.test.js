import { TYPES } from "../../src/context/actionsTypes/authActions";
import { authReducer } from "../../src/context/authReducer";

/* hacer pruebas en los reducers es más sencillo ya que como es una función pura solo recibe el estado inicial o el estado que nosotros queramos evaluarlo y la acción la cual hará que el estado cambie de cierta manera */
describe("Pruebas en authReducer", () => {
  test("debe retornar el estado por defecto", () => {
    /* en las acciones como se manda un objeto vacío entonces no caerá en ningún caso del switch y por ende retornará el estado */
    /* el estado inicial sería que logged sea false y user sea null ya que no hay ningún usuario logeado */
    const state = authReducer({ logged: false, user: null }, {});

    expect(state).toEqual({ logged: false, user: null });
  });

  test("debe de (login) llamar al login, autenticar y establecer el user", () => {
    const user = {
      id: 1,
      name: "Abel Borit",
    };

    const action = {
      type: TYPES.LOGIN,
      payload: user,
    };

    const state = authReducer({ logged: false, user: null }, action);

    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: 1, name: "Abel Borit" },
    };

    const action = {
      type: TYPES.LOGOUT,
      payload: null,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false, user: action.payload });
  });
});
