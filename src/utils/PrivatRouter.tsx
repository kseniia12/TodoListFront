import { Navigate, Outlet } from "react-router-dom";
import { RouterProps } from "../lib/componetts";
import { useAppSelector } from "../hooks";

const PrivatRouter: React.FC<RouterProps>  = () => {
    const user = useAppSelector((state) => state.users.users)
    return user.length !== 0 ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};
export default PrivatRouter;
