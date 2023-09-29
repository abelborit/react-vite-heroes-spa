import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  // console.log(authState);

  /* si no estoy logueado entonces me mostrará las rutas de login pero si estoy autenticado me navegará a las rutas de los héroes */
  return !authState.logged ? children : <Navigate to="/marvel" />;
};
