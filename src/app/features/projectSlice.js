import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  category: "React",
  projectId: "0",
};
export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setProjectId: (state, action) => {
      state.projectId = action.payload;
    },
  },
});

export const { setCategory, setProjectId } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
