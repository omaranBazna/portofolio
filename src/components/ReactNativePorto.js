import "./styles/react-native-porto.css";
import React from "react";
import { ReactNativeProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const ReactNativePorto = ({ setShow }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="react-native-porto">
      <dic className="react-native-porto-content">
        <a href="https://reactnative.dev/" target={"_blank"}>
          <div className="react-native-title">
            <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" />
            <h2>React-Native</h2>
          </div>
        </a>
        <div className="react-native-porto-projects-section">
          <Button
            className="controller-left"
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          <div className="react-native-porto-projects">
            {ReactNativeProjects[index] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactNative"));
                  dispatch(setProjectId(index));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactNativeProjects[index].photo}
                  description={ReactNativeProjects[index].description}
                />
              </div>
            )}
            {ReactNativeProjects[index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactNative"));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactNativeProjects[index + 1].photo}
                  description={ReactNativeProjects[index + 1].description}
                />
              </div>
            )}

            {ReactNativeProjects[index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactNative"));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactNativeProjects[index + 2].photo}
                  description={ReactNativeProjects[index + 2].description}
                />
              </div>
            )}
            {ReactNativeProjects[index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactNative"));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactNativeProjects[index + 3].photo}
                  description={ReactNativeProjects[index + 3].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < ReactNativeProjects.length - 4) {
                setIndex(index + 1);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </dic>
    </div>
  );
};

export default ReactNativePorto;
