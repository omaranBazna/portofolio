import { createSlice } from "@reduxjs/toolkit";
import { ReactProjects } from "../../utilis/data";
import { ReactNativeProjects } from "../../utilis/data";
import { JavaScriptProjects } from "../../utilis/data";
const initialState = {
  category: "ReactJS",
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
export const selectProject = (state) => {
  if (state.project.category == "ReactJS") {
    return ReactProjects.find((project) => {
      return project.id == state.project.projectId;
    });
  }
  if (state.project.category == "ReactNative") {
    return ReactNativeProjects.find((project) => {
      return project.id == state.project.projectId;
    });
  }

  if (state.project.category == "JavaScript") {
    return JavaScriptProjects.find((project) => {
      return project.id == state.project.projectId;
    });
  }
};
export const { setCategory, setProjectId } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
