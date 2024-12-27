import { axiosGetUser, axiosPostLoginUser, axiosPostRegistrationUser } from '../../API/authApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAxiosPostLogin, IAxiosPostRegistration, IAxiosResponse, IResponse, RouterProps } from '../../lib/componets';

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
    localStorage.setItem('token', response.token);
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
    localStorage.setItem('token', response.token);
    return response;
  }
);

export const thunkGetUser = createAsyncThunk<IResponse, RouterProps>(
  'users/dUser',
  async ({
    token,
  }: RouterProps): Promise<IResponse> => {
    const response = await axiosGetUser({
      token,
    });
    return response;
  }
);