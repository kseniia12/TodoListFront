import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../hooks";

const PrivatRouter = () => {
    const users = useAppSelector((state) => state.users.users);
    console.log("users", users)
    return (users.length) ? (<Outlet />) : (<Navigate to="/auth/sign-in"/>);
};
export default PrivatRouter;
