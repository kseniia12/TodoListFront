import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunkCreateUser, thunkGetUser, thunkLoginUser } from "../thunk/thunkUser";
import { IStateUser, IUser } from "../../lib/componets";

const initialState: IStateUser = {
  user: {
    id: 0,
    fullName: "",
    email: "",
    dob: ""
  }
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkLoginUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        state.user = (action.payload.user);
      })
      .addCase(thunkCreateUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        state.user = (action.payload.user);
      })
      .addCase(thunkGetUser.fulfilled, (state, action) => {
        state.user = (action.payload.user);
      })
  }
});

export default userSlice.reducer;
