import React from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  thunkCreateTodo,
  thunkMarkAllTasksCompletedTodo,
} from "../../store/thunk/thunkTodo";
import { StyleInput } from "./style";
import InputRegistration from "../Input";

const Input = () => {
  const [text, setTodo] = useState<string>("");
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(
        thunkCreateTodo({
          text,
          completed: false,
        })
      );
    }
    setTodo("");
  };

  const markAllAsCompleted = () => dispatch(thunkMarkAllTasksCompletedTodo());

  const writeTextFormInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  return (
    <StyleInput lengthTodo={todos.length}>
      <h1 className="title">todos</h1>
      <div className="section">
        <div className="icon" onClick={markAllAsCompleted}></div>
        <form onSubmit={addTask}>
          <InputRegistration
            className="input"
            type="text"
            placeholder="What needs to be done?"
            value={text}
            onChange={writeTextFormInput}
          />
        </form>
      </div>
    </StyleInput>
  );
};
export default Input;
