/* este es el router principal de toda la aplicación */
import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* protección de rutas públicas */}
        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* LoginPage */}
              <Routes>
                <Route path="/*" element={<LoginPage />}></Route>
              </Routes>
            </PublicRoute>
          }
        />

        {/* protección de rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* ruta para logearse */}
        {/* <Route path="login" element={<LoginPage />}></Route> */}

        {/* ruta cuando ya estás logeado */}
        {/* <Route path="/*" element={<HeroesRoutes />}></Route> */}
      </Routes>
    </>
  );
};
