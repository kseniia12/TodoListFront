import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { thunkCreateUser } from "./thunk";
export interface IUser {
    id: number;
    fullName: string;
    email: string;
    dob: string;
}

export interface IToken {
    token: string;
}

export interface IStateUsers {
    users: IUser[];
  loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: SerializedError | null;
}

const initialState: IStateUsers = {
    users: [],
    loadingStatus: 'idle',
    error: null,
  };

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkCreateUser.pending, (state) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(thunkCreateUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string}>) => {
                state.users.push(action.payload.user);
                localStorage.setItem('token', action.payload.token);
                state.loadingStatus = 'succeeded';
            })
            .addCase(thunkCreateUser.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error as SerializedError;
            });

    },
});

export const {

} = userSlice.actions;

export default userSlice.reducer;
