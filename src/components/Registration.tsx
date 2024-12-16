import React, { useState, useEffect } from "react";
import Redirect, { useNavigate } from "react-router-dom";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { Form, FormSection } from "../components/styles/style";
import { useAppDispatch, useAppSelector } from "../hooks";
import { thunkCreateUser } from "./store/thunk";

const Registration = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.users.loadingStatus);
  const tok = localStorage.getItem("token");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      thunkCreateUser({
        fullName,
        email,
        password,
        dob,
      })
    )
    navigate("/todos");
  };

  return (
    <FormSection>
      <h1>Регистрация</h1>
      <Form onSubmit={handleSubmit} className="form">
        <InputRegistration
          type={"text"}
          placeholder={"Фамилия Имя Отчество"}
          setFunction={setFullName}
          f={fullName}
        />
        <InputRegistration
          type={"email"}
          placeholder={"Электронная почта"}
          setFunction={setEmail}
          f={email}
        />
        <InputRegistration
          type={"password"}
          placeholder={"Пароль"}
          setFunction={setPassword}
          f={password}
        />
        <InputRegistration
          type={"date"}
          placeholder={"Дата рождения"}
          setFunction={setDob}
          f={dob}
        />
        <a style={{marginLeft: "230px"}} href="http://localhost:3000/auth/sign-in">Авторизация</a>
        <ButtonRegistration name={"Регистрация"} />
      </Form>
    </FormSection>
  );
};
export default Registration;
