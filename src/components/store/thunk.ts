import { axiosPostRegistrationUser } from '../../API/auchAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IAxiosPost {
    email: string;
    password: string;
}

interface IAxiosResponse {
    token: string;
    user: { id: number; fullName: string; email: string; dob: string; };
}

export const thunkCreateUser = createAsyncThunk<IAxiosResponse, IAxiosPost>(
    'users/addUser',
    async ({
        email,
        password,
      }: IAxiosPost): Promise<IAxiosResponse> =>{
      const response = await axiosPostRegistrationUser({
        email,
        password,
      });
      return response;
    }
  );
 
  