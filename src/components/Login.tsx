import React, { useState } from "react";
import InputRegistration from "./InputRegistration";
import ButtonRegistration from "./ButtonRegistration";
import { thunkGetUser, thunkLoginUser } from "./store/thunk";
import { useAppDispatch } from "../hooks";
import { Form, FormSection } from "./styles/style";
import { useNavigate } from "react-router-dom";


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
    const user = await dispatch(
      thunkGetUser({
        token
      })
    )
    console.log(user)
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
          f={email}
        />
        <InputRegistration
          type={"password"}
          placeholder={"Пароль"}
          setFunction={setPassword}
          f={password}
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
