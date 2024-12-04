import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:4000/auth/sign-in', {
      email : email,
      password: password,
  })
    .then(function (response) {
      console.log("ОК");
    })
    .catch(function (error) {
      console.log("no ok");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputRegistration type={"email"} placeholder={"электронная почта"} setFunction={setEmail} f={email}/>
      <InputRegistration type={"password"} placeholder={"Пароль"} setFunction={setPassword} f={password}/>
      <ButtonRegistration name={"Авторизация"} />
    </form>
  );
};
export default Login;