
import { axiosDefault } from "../axiosDefault";
import { responseObjectTodo } from "../lib/componetts";



export const axiosCreateTodo = async ({
    text,
    completed
}: responseObjectTodo): Promise<responseObjectTodo> => {
    try {
        const response = await axiosDefault.post<responseObjectTodo>(`http://localhost:4000/todos`, {
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
    try {
        const response = await axiosDefault.patch<responseObjectTodo>(`http://localhost:4000/todos/${id}`, {
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
    try {
        const response = await axiosDefault.delete<responseObjectTodo[]>(`http://localhost:4000/todos/${id}`);
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
        const response = await axiosDefault.patch<responseObjectTodo>(`http://localhost:4000/todos/${id}`, {
            completed
        });
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosGetAllCompleted = async (filter: string):Promise<responseObjectTodo[]> => {
    try {
        console.log("filter", filter)
        const response = await axiosDefault.get<responseObjectTodo[]>('/todos', {
            params: {filter}})
            console.log("response.data", response.data)
        return response.data;
    
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosMarkAllCompleted = async (): Promise<responseObjectTodo[]> => {
    try {
        const response = await axiosDefault.patch<responseObjectTodo[]>(`http://localhost:4000/todos`);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};

export const axiosDelAllCompleted = async (): Promise<responseObjectTodo[]> => {
    try {
        const response = await axiosDefault.delete<responseObjectTodo[]>(`http://localhost:4000/todos`);
        return response.data;
    } catch (error) {
        throw new Error("Request failed");
    }
};



