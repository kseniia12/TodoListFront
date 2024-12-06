import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../hooks";

const PrivatRouter = () => {
    const tok = localStorage.getItem("token")
    return (tok) ? (<Outlet />) : (<Navigate to="/auth/sign-in"/>);
};
export default PrivatRouter;
