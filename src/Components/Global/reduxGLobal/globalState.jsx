import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
};

const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const { loginUser } = globalState.actions;

export default globalState.reducer;
