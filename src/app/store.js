import { configureStore } from "@reduxjs/toolkit";
import { windowReducer } from "./features/windowSlice";
export const store = configureStore({
  reducer: {
    windows: windowReducer,
  },
});
