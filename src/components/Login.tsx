import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { thunkLoginUser } from "./store/thunk";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Form, FormSection } from "./styles/style";
import { useNavigate } from "react-router";

const Login = () => {
  const users = useAppSelector((state) => state.users.loadingStatus);
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
    );
    // navigate("/todos");
  };
  return (
    <FormSection>
      <h1>Авторизация</h1>
      <Form onSubmit={handleSubmit}>
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
        <ButtonRegistration name={"Авторизация"} />
      </Form>
    </FormSection>
  );
};
export default Login;
