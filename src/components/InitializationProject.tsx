import { PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { thunkGetUser } from "../store/thunk/thunkUser";

export default function InitializationProject({ children }: PropsWithChildren) {
  const [initialization, setInitialization] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initialize = async () => {
      try {
        if (token) {
          await dispatch(thunkGetUser({ token }));
        } else {
          setInitialization(false);
        }
      } catch (error) {
        console.error("Initialization failed:", error);
      } finally {
        setInitialization(true);
      }
    };
    initialize();
  }, [dispatch, token]);
  if (initialization) {
    return <>{children}</>;
  } else {
    return null;
  }
}
