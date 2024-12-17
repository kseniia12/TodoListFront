import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivatRouter from "./utils/PrivatRouter";
import InterfaceTodo from "./components/interfaceTodo/InterfaceTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/sign-up" element={<Registration />} />
        <Route path="auth/sign-in" element={<Login />} />
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
