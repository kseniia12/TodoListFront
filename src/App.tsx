import Input from "./components/Input";
import Todos from "./components/Todos";
import { StyleForAllProject } from "./components/styles/style";
import GlobalStyles from "./components/styles/reset";
import { useAppSelector } from "./hooks";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivatRouter from "./utils/PrivatRouter";
import InterfaceTodo from "./components/InterfaceTodo";
const App = () => {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/sign-up" element={
          (token)? <InterfaceTodo/>: <Registration/>} />
        <Route path="auth/sign-in" element={
           (token)? <InterfaceTodo/>: <Login/>
          } />
        <Route element={<PrivatRouter />}>
          <Route
            path="/todos"
            element={
              <div className="App">
                <InterfaceTodo/>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
