import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { useAppDispatch } from "../hooks";
import { thunkCreateUser, thunkGetUser } from "../store/thunk/thunkUser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      thunkCreateUser({
        fullName,
        email,
        password,
        dob,
      })
    );
    const token = localStorage.getItem('token');
    await dispatch(
      thunkGetUser({
        token
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
          text={fullName}
        />
        <InputRegistration
          type={"email"}
          placeholder={"Электронная почта"}
          setFunction={setEmail}
          text={email}
        />
        <InputRegistration
          type={"password"}
          placeholder={"Пароль"}
          setFunction={setPassword}
          text={password}
        />
        <InputRegistration
          type={"date"}
          placeholder={"Дата рождения"}
          setFunction={setDob}
          text={dob}
        />
        <a
          style={{ marginLeft: "230px" }}
          href="http://localhost:3000/auth/sign-in"
        >
          Авторизация
        </a>
        <ButtonRegistration name={"Регистрация"} />
      </Form>
    </FormSection>
  );
};
export default Registration;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
