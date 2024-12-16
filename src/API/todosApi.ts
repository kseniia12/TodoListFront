
import { axiosDefault } from "../axiosDefault";
import constantForAxios from "../constant/constant";
import { responseObjectTodo } from "../lib/componetts";

export const axiosCreateTodo = async ({
    text,
    completed
}: responseObjectTodo): Promise<responseObjectTodo> => {
    try {
        const response = await axiosDefault.post<responseObjectTodo>(constantForAxios.createTodo, {
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
}: responseObjectTodo): Promise<responseObjectTodo> => {
    console.log(constantForAxios.createTodo)
    try {
        const response = await axiosDefault.patch<responseObjectTodo>(`${constantForAxios.createTodo}/${id}`, {
            valueInputField
        });

        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosDeleteTodo = async ({
    id,

}: responseObjectTodo): Promise<responseObjectTodo[]> => {
    console.log(`${constantForAxios.createTodo}${id}`)
    try {
        const response = await axiosDefault.delete<responseObjectTodo[]>(`${constantForAxios.createTodo}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosCompletedTodo = async ({
    id,
    completed
}: responseObjectTodo): Promise<responseObjectTodo> => {
    try {
        const response = await axiosDefault.patch<responseObjectTodo>(`${constantForAxios.createTodo}/${id}`, {
            completed
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosGetAllCompleted = async (filter: string): Promise<responseObjectTodo[]> => {
    try {
        const response = await axiosDefault.get<responseObjectTodo[]>(constantForAxios.createTodo, {
            params: { filter }
        })
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosMarkAllCompleted = async (): Promise<responseObjectTodo[]> => {
    try {
        const response = await axiosDefault.patch<responseObjectTodo[]>(constantForAxios.createTodo);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosDelAllCompleted = async (): Promise<responseObjectTodo[]> => {
    try {
        const response = await axiosDefault.delete<responseObjectTodo[]>(constantForAxios.createTodo);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};



