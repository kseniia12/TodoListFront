import React, { useState } from "react";
import { InputRegistrationUser } from "./styles/style";

interface IInputRegistration{
  type: string;
  placeholder: string;
  setFunction: (name: string) => void;
  f: string;
}

const InputRegistration: React.FC<IInputRegistration> = ({type, placeholder, setFunction, f}) => {
  return (
    <InputRegistrationUser
      className="input"
      type={type}
      placeholder={placeholder}
      value={f}
      onChange={(e) => setFunction(e.target.value)}
      required
    />
  );
};
export default InputRegistration;
