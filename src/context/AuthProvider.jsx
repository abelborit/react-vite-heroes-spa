import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { AuthContext } from "./AuthContext";
import { TYPES } from "./actionsTypes/authActions";

const initialState = {};

const init = () => {
  /* si esto regresa un null (porque no hay nada en el localStorage) quiere decir que no hay usuario pero si regresa X cosa entonces quiere decir que sí hay usuario */
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  return {
    /* si user es null entonces al usar !!user quiere decir que hará doble negación y al final será false (null -> true -> false), pero si regresa X cosa (haciendo referencia que sí hay un usuario) entonces con la doble negación será un true (X valor -> false -> true) */
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  /* el authState es lo que aparecerá en el Context.Provider (AuthContext.Provider) para que cualquier otro componente lo pueda utilizar al momento de llamarlo */
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = "") => {
    const user = {
      id: 1,
      name: name,
    };

    const action = {
      /* type: tipo de acción que quiero realizar */
      type: TYPES.LOGIN,
      /* payload: lo que quiero almacenar en el state del AuthProvider */
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: TYPES.LOGOUT,
      payload: null,
    };

    localStorage.removeItem("user");

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
