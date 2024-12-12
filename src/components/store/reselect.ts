import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./index";

export const SelectAllTodos = (state: RootState) => state.todos.todos;
export const SelectActiveFilter = (state: RootState) => state.filters.filter;

const selectTodosByFilter = createSelector(
  [SelectAllTodos, SelectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === "all") {
      return allTodos;
    }

    if (activeFilter === "completed") {
      return allTodos.filter((todo) => todo.completed);
    }

    if (activeFilter === "active") {
      return allTodos.filter((todo) => !todo.completed);
    }
    return []
  }
);

export default selectTodosByFilter;
