import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import filterSlice from "./filterSlice";
import userSlice from "./userSlice";

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