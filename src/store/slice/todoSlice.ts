import { createSlice } from "@reduxjs/toolkit";

import { ResponseArrayTodos } from "../../lib/componets";
import {
  thunkCompletedTodo,
  thunkCreateTodo,
  thunkDelAllTasksCompletedTodo,
  thunkDeleteTodo,
  thunkEditTodo,
  thunkGetAllTodo,
  thunkMarkAllTasksCompletedTodo
} from "../thunk/thunkTodo";

const initialState: ResponseArrayTodos = {
  todos: [],
  previousTodos: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(thunkCreateTodo.pending, (state, action) => {
        const todo = {
          id: action.meta.requestId,
          text: action.meta.arg.text,
          completed: false
        }
        state.todos.push(todo)
      })
      .addCase(thunkCreateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.meta.requestId);
        state.todos[index] = {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      })
      .addCase(thunkEditTodo.pending, (state, action) => {
        state.previousTodos = [...state.todos];
        const index = state.todos.findIndex((todo) => todo.id === action.meta.arg.id);
        state.todos[index] = {
          id: action.meta.arg.id,
          text: action.meta.arg.valueInputField,
          completed: false
        }
      })
      .addCase(thunkEditTodo.rejected, (state, action) => {
        state.todos = state.previousTodos;
        state.previousTodos = [];
      })
      .addCase(thunkDeleteTodo.pending, (state, action) => {
        state.previousTodos = [...state.todos];
        state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg.id);
      })
      .addCase(thunkDeleteTodo.rejected, (state, action) => {
        state.todos = state.previousTodos;
        state.previousTodos = [];
      })
      .addCase(thunkCompletedTodo.pending, (state, action) => {
        state.previousTodos = [...state.todos];
        const index = state.todos.findIndex((todo) => todo.id === action.meta.arg.id);
        state.todos[index] = {
          ...state.todos[index],
          completed: !state.todos[index].completed
        }
      })
      .addCase(thunkCompletedTodo.rejected, (state, action) => {
        state.todos = state.previousTodos;
        state.previousTodos = [];
      })
      .addCase(thunkGetAllTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(thunkMarkAllTasksCompletedTodo.pending, (state, action) => {
        state.previousTodos = [...state.todos];
        const allCompleted = state.todos.every((todo) => todo.completed);
        for (let i = 0; i < state.todos.length; i++) {
          state.todos[i].completed = !allCompleted;
        }
      })
      .addCase(thunkMarkAllTasksCompletedTodo.rejected, (state, action) => {
        state.todos = state.previousTodos;
        state.previousTodos = [];
      })
      .addCase(thunkDelAllTasksCompletedTodo.pending, (state, action) => {
        state.previousTodos = [...state.todos];
        state.todos = state.todos.filter((todo) => todo.completed === false);
      })
      .addCase(thunkDelAllTasksCompletedTodo.rejected, (state, action) => {
        state.todos = state.previousTodos;
        state.previousTodos = [];
      })
  },
});

export default todoSlice.reducer;
