import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  placeholder: string;
  setFunction: (name: string) => void;
  text: string;
}

const InputRegistration: React.FC<Props> = ({
  type,
  placeholder,
  setFunction,
  text,
}) => {
  return (
    <InputRegistrationUser
      className="input"
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={(e) => setFunction(e.target.value)}
      required
    />
  );
};
export default InputRegistration;

const InputRegistrationUser = styled.input`
  max-height: 30px;
  width: 300px;
  padding: 10px;
  background-color: #cbf1f5;
  display: block;
`;
