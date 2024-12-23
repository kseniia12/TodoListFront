import { SerializedError } from "@reduxjs/toolkit";

export interface ButtonProps {
    className?:string;
    filter: string;
}

export interface RouterProps {
    token?: string | null;
}

export interface responseObjectTodo {
        id?: number; 
        text?: string; 
        completed?: boolean; 
        valueInputField?: string;
        key?: number;
}

export type propsTodo = Omit< responseObjectTodo, "id">

export interface ResponseArrayTodos {
    todos: responseObjectTodo[];
    loadingStatus: string;
    error: SerializedError | null;
}

export interface ComponentPropsTodo {
    id: number;
    todo: string;
    completed?: boolean;
  }