import { useEffect } from "react";
import Todo from "../Todo/Todo";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { thunkGetAllTodo } from "../store/thunkTodo";

const Todos = () => {
  const todos = useAppSelector((state)=>state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);
  const dispatch = useAppDispatch();
  useEffect(() => {
dispatch(thunkGetAllTodo(filter))
  }, [dispatch, filter]);
  return (
    <div>
     {todos?.map((todo) => {
        if (!todo.id || !todo.text ) {
          return <div key={todo.text}>ID is missing for todo: {todo.text}</div>;
        }
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            completedTask={todo.completed ? todo.completed : false}
          />
        );
      })}
    </div>
  );
};
export default Todos;
