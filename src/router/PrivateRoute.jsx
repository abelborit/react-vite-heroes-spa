import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  // console.log(authState);

  /* para tener la última página visitada */
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  // console.log(lastPath);

  /* para evitar que se re-renderice innecesariamente y solo se llamará cuando el "lastPath" cambie */
  useEffect(() => {
    localStorage.setItem("lastPath", lastPath);
    // console.log("re-render");
  }, [lastPath]);

  /* si estoy logueado entonces me mostrará las rutas de los héroes pero si no lo estoy me navegará al login  */
  return authState.logged ? children : <Navigate to="/login" />;
};
