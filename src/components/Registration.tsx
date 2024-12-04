import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import axios from "axios";

const Registration = () => {
    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [dob, setDob] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:4000/auth/sign-up', {
      fullName: fullName,
      email : email,
      password: password,
      dob: dob,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputRegistration type={"text"} placeholder={"ФИО"} setFunction={setFullName} f={fullName} />
      <InputRegistration type={"email"} placeholder={"электронная почта"} setFunction={setEmail} f={email}/>
      <InputRegistration type={"password"} placeholder={"Пароль"} setFunction={setPassword} f={password}/>
      <InputRegistration type={"date"} placeholder={"Дата рождения"} setFunction={setDob} f={dob}/>
      <ButtonRegistration name={"Регистрация"} />
    </form>
  );
};
export default Registration;
