import constantForAxios from "../constant/constant";
import { axiosDefault } from "./axiosDefault";
import { IAxiosRes, IResponse } from "../store/thunk/thunkUser";

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

interface IAxiosResponse {
  token: string;
  user: { id: number; fullName: string; email: string; dob: string; };
}



export const axiosPostRegistrationUser = async ({
  fullName,
  email,
  password,
  dob
}: IAxiosPostRegistration): Promise<IAxiosResponse> => {
  try {
    const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.registration, {
      fullName,
      email,
      password,
      dob
    });
    return response.data;
  } catch (error) {
    throw new Error("Request failed");
  }
};

export const axiosPostLoginUser = async ({ email, password }: IAxiosPostLogin): Promise<IAxiosResponse> => {
  try {
    const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.login, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Request failed");
  }
};

export const axiosGetUser = async ({ token }: IAxiosRes): Promise<IResponse> => {
  try {
    const response = await axiosDefault.get<IResponse>(constantForAxios.getMe,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Request failed");
  }
};


