import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { RouterProps } from "../lib/componetts";
import { useAppSelector } from "../hooks";

const PrivatRouter: React.FC<RouterProps>  = () => {
     const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
        setLoading(false);
      }, [token]);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    return token ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};
export default PrivatRouter;
