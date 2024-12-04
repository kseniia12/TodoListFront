import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { axiosPost } from "../API/auchAPI";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    let getDataUsersFromServer = await axiosPost({
      url: 'http://localhost:4000/auth/sign-in',
      email,
      password,
    });
    localStorage.setItem('token', getDataUsersFromServer.token);
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
