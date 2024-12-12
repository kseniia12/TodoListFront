import React from "react";
import { useAppDispatch } from "../hooks";
import cn from "classnames";
import { thunkGetAllTodo } from "../components/store/thunkTodo";
import { ButtonProps } from "../lib/componetts";

const Button: React.FC<ButtonProps> = (props) => {
  const {isActive, filter} = props
  const dispatch = useAppDispatch();
  return (
    <button
      className={cn({ "button-filter-activ": isActive })}
      onClick={() => {
        dispatch(thunkGetAllTodo(filter ? filter : "all"));
      }}
    >
      {filter}
    </button>
  );
};
export default Button;
