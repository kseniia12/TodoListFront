import { useEffect } from "react";
import Todo from "../Todo/Todo";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { thunkGetAllTodo } from "../../store/thunk/thunkTodo";

const Todos = () => {
  const todos = useAppSelector((state)=>state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);

  const dispatch = useAppDispatch();
  
  useEffect(() => {
dispatch(thunkGetAllTodo(String(filter)))
  }, [dispatch, filter]);
  
  return (
    <div>
     {todos?.map((todo) => {
        if (!todo.id || !todo.text ) {
          return <div key={todo.text}>{todo.text}</div>;
        }
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};
export default Todos;
