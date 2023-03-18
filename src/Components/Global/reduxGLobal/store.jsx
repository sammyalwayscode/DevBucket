import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./globalState";

export const store = configureStore({
  reducer: { myReducer },
});
