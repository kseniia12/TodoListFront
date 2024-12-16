import React from "react";
import { useAppDispatch } from "../hooks";
import cn from "classnames";
import { thunkGetAllTodo } from "../components/store/thunkTodo";
import { ButtonProps } from "../lib/componetts";
import { changeFilter } from "./store/filterSlice";

const Button: React.FC<ButtonProps> = (props) => {
  const {isActive, filter} = props
  const dispatch = useAppDispatch();
  
  return (
    <button
      className={cn({ "button-filter-activ": isActive,
        "button-clear-active": !isActive,
       })}
      onClick={() => {
        dispatch(changeFilter(filter));
        dispatch(thunkGetAllTodo(filter ? filter : "all"));
      }}
    >
      {filter}
    </button>
  );
};
export default Button;
