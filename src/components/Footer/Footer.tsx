import { useAppSelector, useAppDispatch } from "../../hooks";
import Button from "../ButtonFiltersTodos/ButtonFiltersTodos";
import cn from "classnames";
import { StylesforFooter } from "./style";
import { thunkDelAllTasksCompletedTodo } from "../../store/thunk/thunkTodo";

const Footer = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);

  const dispatch = useAppDispatch();

  const completeTodos = todos.filter((todo) => todo.completed === true);
  const uncompleteTodos = todos.filter((todo) => todo.completed === false);

  return (
    <StylesforFooter>
      <div> {uncompleteTodos.length} item left</div>
      <div className="buttons-filter">
        <Button isActive={filter === "all"} filter="all" />
        <Button isActive={filter === "completed"} filter="completed" />
        <Button isActive={filter === "active"} filter="active" />
      </div>
      <button
        className={cn({
          "button-clear-hidden": !completeTodos.length,
          "button-clear-active": completeTodos.length,
        })}
        onClick={() => dispatch(thunkDelAllTasksCompletedTodo())}
      >
        Clear Completed
      </button>
    </StylesforFooter>
  );
};
export default Footer;
