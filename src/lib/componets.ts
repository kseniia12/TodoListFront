
export interface ButtonProps {
  className?: string;
  filter: string;
}

export interface RouterProps {
  token?: string | null;
}

export interface responseObjectTodo {
  id?: number | string;
  text?: string;
  completed?: boolean;
  valueInputField?: string;
  key?: number;
}

export interface createTodo {
  id?: number | string;
  text: string;
  completed: boolean;
}

export type propsTodo = Omit<responseObjectTodo, "id">

export interface ResponseArrayTodos {
  todos: responseObjectTodo[];
  previousTodos: responseObjectTodo[];
  
}

export interface ComponentPropsTodo {
  id: number | string;
  todo: string;
  completed?: boolean;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  dob: string;
}

export interface IStateUser {
  user: IUser;
}

export interface IAxiosPostLogin {
  email: string;
  password: string;
}

export interface IAxiosPostRegistration {
  fullName: string,
  email: string,
  password: string,
  dob: string,
}

export interface IAxiosResponse {
  token: string;
  user: { id: number; fullName: string; email: string; dob: string; };
}

export interface IResponse {
  user: { id: number; fullName: string; email: string; dob: string; };
}


export interface IAxiosRes {
  token: string | null | undefined;
}
