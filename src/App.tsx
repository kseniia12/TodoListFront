import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRouter from "./utils/PrivateRouter";
import InterfaceTodo from "./components/interfaceTodo/InterfaceTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign-up" element={<Registration />} />
        <Route path="/auth/sign-in" element={<Login />} />
        <Route element={<PrivateRouter />}>
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

const APP_ROUTES = {
  signUp: 'auth/sign-up',

}
 
export default App;
