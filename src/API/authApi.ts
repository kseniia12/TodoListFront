import constantForAxios from "../constant/constant";
import { axiosDefault } from "./axiosDefault";
import { IAxiosPostLogin, IAxiosPostRegistration, IAxiosRes, IAxiosResponse, IResponse } from "../lib/componets";

export const axiosPostRegistrationUser = async ({
  fullName,
  email,
  password,
  dob
}: IAxiosPostRegistration): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.SIGN_UP, {
    fullName,
    email,
    password,
    dob
  });
  return response.data;
};

export const axiosPostLoginUser = async ({ email, password }: IAxiosPostLogin): Promise<IAxiosResponse> => {
  const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.SIGN_IN, {
    email,
    password,
  });
  return response.data;
};

export const axiosGetUser = async ({ token }: IAxiosRes): Promise<IResponse> => {
  const response = await axiosDefault.get<IResponse>(constantForAxios.GET_ME,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  );
  return response.data;
};


