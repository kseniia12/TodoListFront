import React, { useState } from "react";

import { useAppDispatch } from "../../hooks";
import cn from "classnames";

import { ComponentPropsTodo } from "../../lib/componets";
import { thunkCompletedTodo, thunkDeleteTodo, thunkEditTodo } from "../../store/thunk/thunkTodo";
import { TodoList } from "./style";



const Todo: React.FC<ComponentPropsTodo> = ({ id, todo, completedTask }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [styleTodosList, setStyleTodosList] = useState(false);
  const [valueInputField, setValueInputField] = useState(todo);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useAppDispatch();
  let completed = !completedTask
  const completeTask = (id: number) => {
    dispatch(thunkCompletedTodo({id, completed}));
  };

  const deleteTask = (id: number) => {
    dispatch(thunkDeleteTodo({id}));
  };

  const handleDoubleClick = (
    e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    setMouseOver(false);
    setIsInputFocused(true);
    e.preventDefault();
    setStyleTodosList(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMouseOver(true);
      e.preventDefault();
      dispatch(thunkEditTodo({ id, valueInputField }));
      setIsInputFocused(false);
      setStyleTodosList(false);
    }
  };

  return (
    <TodoList
      key={id}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className={cn({
          "strikethrough-text": completedTask,
          "not-strikethrough-text": !completedTask,
        })}
      >
        <div
          className={cn({
            "completed-task": completedTask,
            "unfulfilled-task": !completedTask,
          })}
          onClick={() => completeTask(id)}
        ></div>
        {styleTodosList === true ? (
          <input
            key={id}
            type="text"
            value={valueInputField}
            onChange={(e) => setValueInputField(e.target.value)}
            onKeyDown={handleKeyPress}
            onMouseEnter={() => setMouseOver(false)}
            className={`${
              isInputFocused ? "activ-form-input" : "no-activ-form-input"
            }`}
          />
        ) : (
          <div className="activ-todo">
            <div key={id}>{todo}</div>
          </div>
        )}
      </div>
      <div
        className={cn({
          "no-activ-cross": !mouseOver,
          "activ-cross": mouseOver,
        })}
        onClick={() => deleteTask(id)}
      >
        x
      </div>
    </TodoList>
  );
};
export default Todo;
