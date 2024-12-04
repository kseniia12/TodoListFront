import axios from "axios";
interface IAxiosPost {
    url: string;
    email: string;
    password: string;
}

interface IAxiosResponse {
    token: string;
    user: { id: number; fullName: string; email: string; dob: string; };
}

export const axiosPost = async ({ url, email, password }: IAxiosPost): Promise<IAxiosResponse> => {
    try {
        const response = await axios.post<IAxiosResponse>(url, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};