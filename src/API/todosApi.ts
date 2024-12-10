import constantForAxios from "../constant/constant";
import { axiosDefault } from "../axiosDefault";
import { IAxiosCompleted, IAxiosResDelete } from "../components/store/thunkTodo";

interface IAxiosPostRegistration {
    text: string,
    completed: boolean,
}

interface IAxiosEditTodo {
    id: number,
    valueInputField: string,
}

interface IAxiosResponse {
    todo: {id: number; text: string, completed: boolean; valueInputField: string };
}

interface IAxiosDeleteTodoById {
    id: number,
}

export const axiosCreateTodo = async ({
    text,
    completed
}: IAxiosPostRegistration): Promise<IAxiosResponse> => {
    try {
        const response = await axiosDefault.post<IAxiosResponse>(`http://localhost:4000/todos`, {
            text,
            completed
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosEditTodo = async ({
    id,
    valueInputField,
}: IAxiosEditTodo): Promise<IAxiosResponse> => {
    try {
        const response = await axiosDefault.patch<IAxiosResponse>(`http://localhost:4000/todos/${id}`, {
            valueInputField
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosDeleteTodo = async ({
    id,

}: IAxiosDeleteTodoById): Promise<IAxiosResDelete> => {
    try {
        const response = await axiosDefault.delete<IAxiosResDelete>(`http://localhost:4000/todos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosCompletedTodo = async ({
    id,
    completed
}: IAxiosCompleted): Promise<IAxiosResponse> => {
    try {
        const response = await axiosDefault.patch<IAxiosResponse>(`http://localhost:4000/todos/${id}`, {
            completed
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosGetAllCompleted = async (): Promise<IAxiosResDelete> => {
    try {
        const response = await axiosDefault.get<IAxiosResDelete>(`http://localhost:4000/todos`);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

