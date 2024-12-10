import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosCompletedTodo, axiosCreateTodo, axiosDeleteTodo, axiosEditTodo, axiosGetAllCompleted } from '../../API/todosApi';
import { ITodo } from './todoSlice';

interface IAxiosPostRegistration {
  text: string,
  completed: boolean,
}

export interface IAxiosCompleted{
  id: number,
  completed: boolean,
}

interface IAxiosDeleteTodoById {
  id: number,
}

interface IAxiosEditTodo {
  id: number,
  valueInputField: string,
}

interface IAxiosResponse {
  todo: {
    id: number, text: string, completed: boolean; valueInputField: string
  }
}

export interface IAxiosResDelete {
  todo: ITodo[]
}


export const thunkCreateTodo = createAsyncThunk<IAxiosResponse, IAxiosPostRegistration>(
  'todos/createTodo',
  async ({
    text,
    completed
  }: IAxiosPostRegistration): Promise<IAxiosResponse> => {
    const response = await axiosCreateTodo({
      text,
      completed
    });
    return response;
  }
);

export const thunkEditTodo = createAsyncThunk<IAxiosResponse, IAxiosEditTodo>(
  'todos/editTodo',
  async ({
    id,
    valueInputField
  }: IAxiosEditTodo): Promise<IAxiosResponse> => {
    const response = await axiosEditTodo({
      id,
      valueInputField
    });
    return response;
  }
);

export const thunkDeleteTodo = createAsyncThunk<IAxiosResDelete, IAxiosDeleteTodoById>(
  'todos/deleteTodo',
  async ({
    id,
  }: IAxiosDeleteTodoById): Promise<IAxiosResDelete> => {
    const response = await axiosDeleteTodo({
      id,
    });
    return response;
  }
);

export const thunkCompletedTodo = createAsyncThunk<IAxiosResponse, IAxiosCompleted>(
  'todos/completedTodo',
  async ({
    id,
    completed
  }: IAxiosCompleted): Promise<IAxiosResponse> => {
    const response = await axiosCompletedTodo({
      id,
      completed
    });
    return response;
  }
);

export const thunkGetAllTodo = createAsyncThunk('todos/detAllTodo', async()=> {
    const response = await axiosGetAllCompleted();
    return response;
  }
);
