import constantForAxios from "../constant/constant";
import { axiosDefault } from "../axiosDefault";

interface IAxiosPostRegistration {
    text: string,
    completed: boolean,
}

interface IAxiosResponse {
    todo: {id: number; text: string, completed: boolean };
}

export const axiosCreateTodo = async ({
    text,
    completed
}: IAxiosPostRegistration): Promise<IAxiosResponse> => {
    try {
        console.log("text", text)
        console.log("completed", completed)
        const response = await axiosDefault.post<IAxiosResponse>(`http://localhost:4000/todos`, {
            text,
            completed
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};