import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PrivatRouter from "./utils/PrivatRouter";
import InterfaceTodo from "./components/InterfaceTodo";
import { useEffect, useState } from "react";
import { StyleForAllProject } from "./components/styles/style";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="auth/sign-up"
          element={<Registration />}
        />
        <Route
          path="auth/sign-in"
          element={<Login />}
        />
        <Route element={<PrivatRouter />}>
          <Route
            path="/todos"
            element={
              <div className="App">
                <InterfaceTodo />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
