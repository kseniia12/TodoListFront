import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  filter: string;
}
const initialState: IInitialState = {
  filter: "all",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
