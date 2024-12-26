import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { ComponentPropsTodo } from "../../lib/componets";
import {
  thunkCompletedTodo,
  thunkDeleteTodo,
  thunkEditTodo,
} from "../../store/thunk/thunkTodo";
import { TodoList } from "./style";
import Input from "../Input";

const Todo: React.FC<ComponentPropsTodo> = ({ id, todo, completed }) => {
  const [styleTodosList, setStyleTodosList] = useState(false);
  const [valueInputField, setValueInputField] = useState(todo);
  const dispatch = useAppDispatch();

  const completeTask = (id: number) =>
    dispatch(thunkCompletedTodo({ id, completed }));

  const deleteTask = () => dispatch(thunkDeleteTodo({ id }));

  const writeDownText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValueInputField(e.target.value);

  const chetoSubmit = () => completeTask(id as number);

  const handleDoubleClick = (
    e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    e.preventDefault();
    setStyleTodosList(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      dispatch(thunkEditTodo({ id, valueInputField }));
      setStyleTodosList(false);
    }
  };

  return (
    <TodoList completed={String(completed)} onDoubleClick={handleDoubleClick}>
      <div className="text">
        <div className="check-box" onClick={chetoSubmit}></div>
        {styleTodosList ? (
          <Input
            type="text"
            value={valueInputField}
            onChange={writeDownText}
            onKeyDown={handleKeyPress}
            className="input-form"
          />
        ) : (
          <div className="item">{todo}</div>
        )}
      </div>
      <div className="cross" onClick={deleteTask}>
        x
      </div>
    </TodoList>
  );
};
export default Todo;
