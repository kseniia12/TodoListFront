
import { axiosDefault } from "./axiosDefault";
import constantForAxios from "../constant/constant";
import { createTodo, responseObjectTodo } from "../lib/componets";

// const baseTodoPath = '/todos'

export const axiosCreateTodo = async ({
  text,
  completed
}: createTodo): Promise<createTodo> => {
  const response = await axiosDefault.post<createTodo>(constantForAxios.createTodo, {
    text,
    completed
  });
  return response.data;
};

export const axiosEditTodo = async ({
  id,
  valueInputField,
}: responseObjectTodo): Promise<responseObjectTodo> => {
  const response = await axiosDefault.patch<responseObjectTodo>(`${constantForAxios.createTodo}/${id}`, {
    valueInputField
  });

  return response.data;
};

export const axiosDeleteTodo = async ({
  id,

}: responseObjectTodo): Promise<responseObjectTodo[]> => {
  const response = await axiosDefault.delete<responseObjectTodo[]>(`${constantForAxios.createTodo}/${id}`);
  return response.data;
};

export const axiosCompletedTodo = async ({
  id,
  completed
}: responseObjectTodo): Promise<responseObjectTodo> => {
  const response = await axiosDefault.patch<responseObjectTodo>(`${constantForAxios.createTodo}/${id}`, {
    completed
  });
  return response.data;
};

export const axiosGetAllCompleted = async (filter: string): Promise<responseObjectTodo[]> => {
  const response = await axiosDefault.get<responseObjectTodo[]>(constantForAxios.createTodo, {
    params: { filter }
  })
  return response.data;
};

export const axiosMarkAllCompleted = async (): Promise<responseObjectTodo[]> => {
  const response = await axiosDefault.patch<responseObjectTodo[]>(constantForAxios.createTodo);
  return response.data;
};

export const axiosDelAllCompleted = async (): Promise<responseObjectTodo[]> => {
  const response = await axiosDefault.delete<responseObjectTodo[]>(constantForAxios.createTodo);
  return response.data;
};



