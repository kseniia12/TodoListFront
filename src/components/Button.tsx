import React from "react";
import styled from "styled-components";

interface IButtonRegistration {
  name: string;
}

const Button: React.FC<IButtonRegistration> = ({ name }) => {
  return (
    <CommonButton type="submit">
      <div>{name}</div>
    </CommonButton>
  );
};

export const CommonButton = styled.button`
  max-height: 30px;
  width: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
