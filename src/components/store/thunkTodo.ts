import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosCreateTodo } from '../../API/todosApi';

interface IAxiosPostRegistration {
    text: string,
    completed: boolean,
}

interface IAxiosResponse {
    todo: {id:number, text: string, completed: boolean };
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

