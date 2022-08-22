import { configureStore } from "@reduxjs/toolkit";
import { windowReducer } from "./features/windowSlice";
import { projectReducer } from "./features/projectSlice";
export const store = configureStore({
  reducer: {
    windows: windowReducer,
    project: projectReducer,
  },
});
