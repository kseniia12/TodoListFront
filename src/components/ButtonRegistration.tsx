import React from "react";
import { ButtonRegistrationAndLogin } from "./styles/style";
interface IButtonRegistration {
  name: string;
}
const ButtonRegistration: React.FC<IButtonRegistration> = ({ name }) => {
  return <ButtonRegistrationAndLogin type="submit"><div>{name}</div></ButtonRegistrationAndLogin>;
};
export default ButtonRegistration;
