import axios from "axios";
import constantForAxios from "../constant/constant";
import { axiosDefault } from "../axiosDefault";
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

export const axiosPostLoginUser = async ({ email, password }: IAxiosPostLogin): Promise<IAxiosResponse> => {
    try {
        const response = await axiosDefault.post<IAxiosResponse>(constantForAxios.login, {
            email,
            password,
        });
        console.log("log")
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

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
        console.log("reg")
        return response.data;
    
    } catch (error) {
        throw new Error("Request failed");
    }
};

