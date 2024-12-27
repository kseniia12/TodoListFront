import { Navigate, Outlet } from "react-router-dom";
import { RouterProps } from "../lib/componets";
import { useAppSelector } from "../hooks";
import constantForAxios from "../constant/constant";

const PrivateRouter: React.FC<RouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  return user ? <Outlet /> : <Navigate to={`${constantForAxios.SIGN_IN}`} />;
};
export default PrivateRouter;
