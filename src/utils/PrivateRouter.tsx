import { Navigate, Outlet } from "react-router-dom";
import { RouterProps } from "../lib/componets";
import { useAppSelector } from "../hooks";

const PrivateRouter: React.FC<RouterProps> = () => {
  const user = useAppSelector((state) => state.users.user);
  return user ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};
export default PrivateRouter;
