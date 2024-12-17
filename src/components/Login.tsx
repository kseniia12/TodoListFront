import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { thunkGetUser, thunkLoginUser } from "../store/thunk/thunkUser";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(
      thunkLoginUser({
        email,
        password,
      })
    )
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
      <h1>Авторизация</h1>
      <Form onSubmit={handleSubmit}>
        <InputRegistration
          type="email"
          placeholder="Электронная почта"
          setFunction={setEmail}
          text={email}
        />
        <InputRegistration
          type={"password"}
          placeholder={"Пароль"}
          setFunction={setPassword}
          text={password}
        />
         <a style={{marginLeft: "230px"}} href="http://localhost:3000/auth/sign-up">
        Регистрация
        </a>
        <ButtonRegistration name={"Авторизация"} />
      </Form>
    </FormSection>
  );
};
export default Login;

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
