import React, { useState } from "react";
import Input from "./Input";
import { CommonButton } from "./Button";
import { thunkLoginUser } from "../store/thunk/thunkUser";
import { useAppDispatch } from "../hooks";
import { Link, useNavigate } from "react-router-dom";
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
    try {
      await dispatch(
        thunkLoginUser({
          email,
          password,
        })
      ).unwrap();
      navigate("/todos");
    } catch (error) {
      
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <FormSection>
      <h1>Авторизация</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Электронная почта"
          onChange={handleEmailChange}
          value={email}
        />
        <Input
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          value={password}
        />
        <Link className="button" to="/auth/sign-up">
          Регистрация
        </Link>
        <CommonButton>Авторизация</CommonButton>
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
  .button {
    margin-left: "500px";
  }
`;
