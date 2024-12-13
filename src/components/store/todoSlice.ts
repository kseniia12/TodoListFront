import { createSlice } from "@reduxjs/toolkit";
import { thunkCompletedTodo, thunkCreateTodo, thunkDelAllTasksCompletedTodo, thunkDeleteTodo, thunkEditTodo, thunkGetAllTodo, thunkMarkAllTasksCompletedTodo } from "./thunkTodo";
import { ResponseArrayTodos } from "../../lib/componetts";

const initialState: ResponseArrayTodos = {
  todos: [],
  loadingStatus: 'idle',
  error: null,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkCreateTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkEditTodo.fulfilled, (state, action) => {
        const id = action.payload.id;
        const index = state.todos.findIndex((todo) => todo.id === id);
        if (index === -1) {
          return;
        }
        state.todos[index].text = action.payload.text;
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkDeleteTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkCompletedTodo.fulfilled, (state, action) => {
        const id = action.payload.id;
        const index = state.todos.findIndex((todo) => todo.id === id);
        if (index === -1) {
          return;
        }
        state.todos[index].completed = !state.todos[index].completed;
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkGetAllTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkMarkAllTasksCompletedTodo.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkDelAllTasksCompletedTodo.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loadingStatus = 'succeeded';
      })
  },
});

export default todoSlice.reducer;
