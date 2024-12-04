import React, { useState } from "react";

interface IInputRegistration{
  type: string;
  placeholder: string;
  setFunction: (name: string) => void;
  f: string;
}

const InputRegistration: React.FC<IInputRegistration> = ({type, placeholder, setFunction, f}) => {
  return (
    <input
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
