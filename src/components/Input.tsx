import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void | undefined;
}

const Input: React.FC<Props> = ({
  className,
  type,
  placeholder,
  value, 
  onChange,
  onKeyDown,
}) => {
  return (
    <InputRegistrationUser
      className = {className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required
    />
  );
};
export default Input;

const InputRegistrationUser = styled.input`
  max-height: 30px;
  padding: 20px;
  width: 300px;
  display: block;
`;
