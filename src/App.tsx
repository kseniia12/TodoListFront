import React from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { StyleForAllProject } from "./components/styles/style";
import GlobalStyles from "./components/styles/reset";
import { useAppSelector } from "./hooks";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
const App = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/sign-up" element={<Registration />} />
        <Route path="auth/sign-in" element={<Login />} />
        <Route
          path="todos"
          element={
            <div className="App">
              <GlobalStyles />
              <StyleForAllProject>
                <Input />
                <Todos />
                {todos.length > 0 ? <Footer /> : null}
              </StyleForAllProject>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
