import { axiosGetUser, axiosPostLoginUser, axiosPostRegistrationUser } from '../../API/auchAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IAxiosPostLogin {
  email: string;
  password: string;
}

interface IAxiosPostRegistration {
  fullName: string,
  email: string,
  password: string,
  dob: string,
}

export interface IResponse {
  user: { id: number; fullName: string; email: string; dob: string; };
}

interface IAxiosResponse {
  token: string;
  user: { id: number; fullName: string; email: string; dob: string; };
}

export interface IAxiosRes {
  token: string | null;
}

export const thunkCreateUser = createAsyncThunk<IAxiosResponse, IAxiosPostRegistration>(
  'users/createUser',
  async ({
    fullName,
    email,
    password,
    dob
  }: IAxiosPostRegistration): Promise<IAxiosResponse> => {
    const response = await axiosPostRegistrationUser({
      fullName,
      email,
      password,
      dob
    });
    return response;
  }
);

export const thunkLoginUser = createAsyncThunk<IAxiosResponse, IAxiosPostLogin>(
  'users/loginUser',
  async ({
    email,
    password,
  }: IAxiosPostLogin): Promise<IAxiosResponse> => {
    const response = await axiosPostLoginUser({
      email,
      password,
    });
    return response;
  }
);

export const thunkGetUser = createAsyncThunk<IResponse, IAxiosRes>(
  'users/dUser',
  async ({
   token,
  }: IAxiosRes): Promise<IResponse> => {
    const response = await axiosGetUser({
      token,
    });
    return response;
  }
);