const constantForAxios = {
    login: "/auth/sign-in",
    registration: "/auth/sign-up",
    createTodo: "/todos",
    getMe: "/users/me"
  } as const;

export default constantForAxios;


