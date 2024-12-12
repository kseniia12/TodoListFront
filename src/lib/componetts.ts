import { SerializedError } from "@reduxjs/toolkit";

export interface ButtonProps {
    isActive?: boolean;
    filter?: string;
}

export interface responseObjectTodo {
        id?: number; 
        text?: string; 
        completed?: boolean; 
        valueInputField?: string;
        key?: number;
}

export interface ResponseArrayTodos {
    todos: responseObjectTodo[];
    loadingStatus: string;
    error: SerializedError | null;
}

export interface ComponentPropsTodo {
    id: number;
    todo: string;
    completedTask: boolean;
  }