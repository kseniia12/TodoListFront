import React from "react";
// import { ButtonRegistrationAndLogin } from "./styles/style";
import styled from "styled-components";
interface IButtonRegistration {
  name: string;
}
const ButtonRegistration: React.FC<IButtonRegistration> = ({ name }) => {
  return (
    <StyledWrapper type="submit">
      <div>{name}</div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.button`
  max-height: 30px;
  width: 150px;
  padding: 10px;
  background-color: #a3d2d6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ButtonRegistration;
