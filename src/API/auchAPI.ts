import axios from "axios";
interface IAxiosPost {
    email: string;
    password: string;
}

interface IAxiosResponse {
    token: string;
    user: { id: number; fullName: string; email: string; dob: string; };
}

export const axiosPostRegistrationUser = async ({email, password }: IAxiosPost): Promise<IAxiosResponse> => {
    try {
        const response = await axios.post<IAxiosResponse>('http://localhost:4000/auth/sign-in', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};