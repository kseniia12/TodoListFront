import React from "react";
import { useAppDispatch } from "../../hooks";
import { ButtonProps } from "../../lib/componets";
import { changeFilter } from "../../store/slice/filterSlice";
import { thunkGetAllTodo } from "../../store/thunk/thunkTodo";

const ButtonFiltersTodos: React.FC<ButtonProps> = (props) => {
  const {className, filter} = props
  const dispatch = useAppDispatch();
  return (
     <button
     className={`${className}`}
      onClick={() => {
        dispatch(changeFilter(filter));
        dispatch(thunkGetAllTodo(filter ? filter : "all"));
      }}
    >
      {filter}
    </button>
  );
};
export default ButtonFiltersTodos;
