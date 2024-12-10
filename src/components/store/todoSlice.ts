import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import uuid from 'react-uuid';
import { thunkCreateTodo } from "./thunkTodo";

export interface ITodo {
  id: number;
  text: string
  completed: boolean
}

export interface IStateTodos {
  todos: ITodo[];
  loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: SerializedError | null;
}

interface IEditTodo {
  id: number;
  valueInputField: string;
}

const initialState: IStateTodos = {
  todos: [],
  loadingStatus: 'idle',
  error: null,
}


const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Number(uuid()),
        text: action.payload,
        completed: false,
      });
    },
    // completeTodo(state, action: PayloadAction<string>) {
    //   const id = action.payload;
    //   const index = state.todos.findIndex((todo) => todo.id === id);
    //   if (index === -1) {
    //     return;
    //   }
    //   state.todos[index].completed = !state.todos[index].completed;
    // },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    markAllTasksCompleted(state) {
      const allCompleted = state.todos.every((todo) => todo.completed);
      for (let i = 0; i < state.todos.length; i++) {
        state.todos[i].completed = !allCompleted;
      }
    },
    deleteAllCompletedTask(state) {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
    // editTodo(state, action: PayloadAction<IEditTodo>) {
    //   const id = action.payload.id;
    //   const index = state.todos.findIndex((todo) => todo.id === id);
    //   if (index === -1) {
    //     return;
    //   }
    //   state.todos[index].text = action.payload.valueInputField;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkCreateTodo.fulfilled, (state, action: PayloadAction<{ todo: ITodo }>) => {
        state.todos.push(action.payload.todo);
        state.loadingStatus = 'succeeded';
      })
      .addCase(thunkCreateTodo.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(thunkCreateTodo.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error as SerializedError;
      });

  },
});

export const {
  addTodo,
  // completeTodo,
  deleteTodo,
  markAllTasksCompleted,
  deleteAllCompletedTask,
  // editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
