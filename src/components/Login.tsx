import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { thunkCreateUser } from "./store/thunk";
import { useAppDispatch } from "../hooks";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();;
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(thunkCreateUser({
      email,
      password,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputRegistration
        type={"email"}
        placeholder={"электронная почта"}
        setFunction={setEmail}
        f={email}
      />
      <InputRegistration
        type={"password"}
        placeholder={"Пароль"}
        setFunction={setPassword}
        f={password}
      />
      <ButtonRegistration name={"Авторизация"} />
    </form>
  );
};
export default Login;
