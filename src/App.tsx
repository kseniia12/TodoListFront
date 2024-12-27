import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRouter from "./utils/PrivateRouter";
import InterfaceTodo from "./components/interfaceTodo/InterfaceTodo";
import constantForAxios from "./constant/constant";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${constantForAxios.SIGN_UP}`} element={<Registration />} />
        <Route path={`${constantForAxios.SIGN_IN}`} element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route
            path={`${constantForAxios.TODO}`}
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
