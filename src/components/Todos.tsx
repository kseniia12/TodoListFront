import React, { useEffect } from "react";
import Todo from "./Todo";
import { useAppDispatch, useAppSelector } from "../hooks";
import selectTodosByFilter from "./store/reselect";
import { thunkGetAllTodo } from "./store/thunkTodo";

const Todos = () => {
  const todos = useAppSelector((state)=>state.todos.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetAllTodo())
  }, [dispatch]);
  return (
    <div>
      {todos?.map((todo) => (
        <Todo
          id={todo.id}
          todo={todo.text}
          completedTask={todo.completed}
          key={todo.id}
        />
      ))}
    </div>
  );
};
export default Todos;
