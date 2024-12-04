import React from "react";
interface IButtonRegistration {
  name: string;
}
const ButtonRegistration: React.FC<IButtonRegistration> = ({ name }) => {
  return <button type="submit">{name}</button>;
};
export default ButtonRegistration;
