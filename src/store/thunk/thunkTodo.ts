import { createAsyncThunk } from '@reduxjs/toolkit';

import { responseObjectTodo } from '../../lib/componets';
import { axiosCompletedTodo, axiosCreateTodo, axiosDelAllCompleted, axiosDeleteTodo, axiosEditTodo, axiosGetAllCompleted, axiosMarkAllCompleted } from '../../API/todosApi';


export const thunkCreateTodo = createAsyncThunk<responseObjectTodo, responseObjectTodo>(
  'todos/createTodo',
  async ({
    text,
    completed
  }: responseObjectTodo): Promise<responseObjectTodo> => {
    const response = await axiosCreateTodo({
      text,
      completed
    });
    return response;
  }
);

export const thunkEditTodo = createAsyncThunk<responseObjectTodo, responseObjectTodo>(
  'todos/editTodo',
  async ({
    id,
    valueInputField
  }: responseObjectTodo): Promise<responseObjectTodo> => {
    const response = await axiosEditTodo({
      id,
      valueInputField
    });
    return response;
  }
);

export const thunkDeleteTodo = createAsyncThunk<responseObjectTodo[], responseObjectTodo>(
  'todos/deleteTodo',
  async ({
    id,
  }: responseObjectTodo): Promise<responseObjectTodo[]> => {
    const response = await axiosDeleteTodo({
      id,
    });
    return response;
  }
);

export const thunkCompletedTodo = createAsyncThunk<responseObjectTodo, responseObjectTodo>(
  'todos/completedTodo',
  async ({
    id,
    completed
  }: responseObjectTodo): Promise<responseObjectTodo> => {
    const response = await axiosCompletedTodo({
      id,
      completed
    });
    return response;
  }
);


export const thunkGetAllTodo = createAsyncThunk<responseObjectTodo[], string>(
  'todos/getAllTodo',
  async (filter) => {
    const response = await axiosGetAllCompleted(filter);
    return response;
  }
);

export const thunkMarkAllTasksCompletedTodo = createAsyncThunk('todos/markAllTodo', async () => {
  const response = await axiosMarkAllCompleted();
  return response;
}
);

export const thunkDelAllTasksCompletedTodo = createAsyncThunk('todos/delAllTodo', async () => {
  const response = await axiosDelAllCompleted();
  return response;
}
);