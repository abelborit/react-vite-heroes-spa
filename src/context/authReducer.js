import { TYPES } from "./actionsTypes/authActions";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        /* siempre sería bueno colocar una copia del estado porque no se sabe si más adelante colocaremos más propiedades al state */
        ...state,
        logged: true,
        user: action.payload,
      };

    case TYPES.LOGOUT:
      return {
        logged: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
