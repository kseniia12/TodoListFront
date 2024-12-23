import { useAppSelector, useAppDispatch } from "../../hooks";
import ButtonFiltersTodos from "../ButtonFiltersTodos/ButtonFiltersTodos";
import { StylesforFooter } from "./style";
import { thunkDelAllTasksCompletedTodo } from "../../store/thunk/thunkTodo";

const Footer = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);

  const dispatch = useAppDispatch();

  const completeTodos = todos.filter((todo) => todo.completed === true);
  const uncompleteTodos = todos.filter((todo) => todo.completed === false);

  const deleteAllCompletedTodo = () => dispatch(thunkDelAllTasksCompletedTodo());

  return (
    <StylesforFooter numberCompletedTasks={completeTodos.length}>
      <div> {uncompleteTodos.length} item left</div>
      <div className="buttons">
        <ButtonFiltersTodos  className={`${filter === 'all' ? 'button-filter' : ''}`} filter="all" />
        <ButtonFiltersTodos className={`${filter === 'completed' ? 'button-filter' : ''}`} filter="completed" />
        <ButtonFiltersTodos className={`${filter === 'active' ? 'button-filter' : ''}`} filter="active" />
      </div>
      <button
        className="button-clear-active-todos"
        onClick={deleteAllCompletedTodo}
      >
        Clear Completed
      </button>
    </StylesforFooter>
  );
};
export default Footer;
