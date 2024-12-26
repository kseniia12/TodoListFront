import React, { useState } from "react";
import Input from "./Input";
import { useAppDispatch } from "../hooks";
import { CommonButton } from "./Button";
import { thunkCreateUser } from "../store/thunk/thunkUser";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     const user = await dispatch(
        thunkCreateUser({
          fullName,
          email,
          password,
          dob,
        })
      ).unwrap();
      if (user){
        navigate("/todos");
      }
    } catch (error) {
      navigate("/auth/sign-in");
    }
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };

  return (
    <FormSection>
      <h1>Регистрация</h1>
      <Form onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          placeholder="Фамилия Имя Отчество"
          onChange={handleFullNameChange}
          value={fullName}
        />
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
        <Input
          type="date"
          placeholder="Дата рождения"
          onChange={handleDobChange}
          value={dob}
        />
        <Link className="auth-link" to="/auth/sign-in">
          Авторизация
        </Link>
        <CommonButton>Регистрация</CommonButton>
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
  .auth-link {
    margin-left: "230px";
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
