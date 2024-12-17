import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import filterSlice from "./slice/filterSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filterSlice,
    users: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;