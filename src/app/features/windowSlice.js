import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMessage: false,
  showProjectDetails: false,
};

export const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openMessage: (state, action) => {
      state.showMessage = false;
    },
    closeMessage: (state) => {
      state.showMessage = false;
    },
    openProjectD: (state) => {
      state.showProjectDetails = true;
    },
    closeProjectD: (state) => {
      state.showProjectDetails = false;
    },
  },
});
export const windowReducer = windowSlice.reducer;
export const { openMessage, closeMessage, openProjectD, closeProjectD } =
  windowSlice.actions;
