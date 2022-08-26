import "./styles/unity-porto.css";
import React from "react";
import { UnityProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const UnityPorto = ({ setShow }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="unity-porto">
      <dic className="unity-porto-content">
        <a href="https://unity.com/" target={"_blank"}>
          <div className="unity-title">
            <img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Unity.png" />
            <h2>Unity</h2>
          </div>
        </a>
        <div className="unity-porto-projects-section">
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
          <div className="unity-porto-projects">
            {UnityProjects[index] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("Unity"));
                  dispatch(setProjectId(index));
                }}
              >
                <ReactProjectCard
                  imgSrc={UnityProjects[index].photo}
                  description={UnityProjects[index].description}
                />
              </div>
            )}
            {UnityProjects[index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("Unity"));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <ReactProjectCard
                  imgSrc={UnityProjects[index + 1].photo}
                  description={UnityProjects[index + 1].description}
                />
              </div>
            )}

            {UnityProjects[index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("Unity"));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <ReactProjectCard
                  imgSrc={UnityProjects[index + 2].photo}
                  description={UnityProjects[index + 2].description}
                />
              </div>
            )}
            {UnityProjects[index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("Unity"));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <ReactProjectCard
                  imgSrc={UnityProjects[index + 3].photo}
                  description={UnityProjects[index + 3].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < UnityProjects.length - 4) {
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

export default UnityPorto;
