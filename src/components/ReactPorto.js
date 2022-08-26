import "./styles/react-porto.css";
import React from "react";
import { ReactProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const ReactPorto = ({ scroll, setShow }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="react-porto">
      <dic className="react-porto-content">
        <a href="https://reactjs.org/" target={"_blank"}>
          <div className="react-title">
            <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" />
            <h2>ReactJS</h2>
          </div>
        </a>
        <div className="react-porto-projects-section">
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
          <div className="react-porto-projects">
            {ReactProjects[index] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactJS"));
                  dispatch(setProjectId(index));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactProjects[index].photo}
                  description={ReactProjects[index].description}
                />
              </div>
            )}
            {ReactProjects[index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactJS"));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactProjects[index + 1].photo}
                  description={ReactProjects[index + 1].description}
                />
              </div>
            )}

            {ReactProjects[index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactJS"));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactProjects[index + 2].photo}
                  description={ReactProjects[index + 2].description}
                />
              </div>
            )}
            {ReactProjects[index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactJS"));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <ReactProjectCard
                  imgSrc={ReactProjects[index + 3].photo}
                  description={ReactProjects[index + 3].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < ReactProjects.length - 4) {
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

export default ReactPorto;
