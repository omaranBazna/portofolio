import "./styles/html-porto.css";
import React from "react";
import { HTMLProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const HTMLPorto = ({ scroll, setShow }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="html-porto">
      <dic className="html-porto-content">
        <a href="https://www.javascript.com/" target={"_blank"}>
          <div className="html-title">
            <img src="https://cdn-icons-png.flaticon.com/512/1199/1199113.png?w=360" />
            <h2>HTML&CSS</h2>
          </div>
        </a>
        <div className="html-porto-projects-section">
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
          <div className="html-porto-projects">
            {HTMLProjects[index] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("HTML"));
                  dispatch(setProjectId(index));
                }}
              >
                <ReactProjectCard
                  imgSrc={HTMLProjects[index].photo}
                  description={HTMLProjects[index].description}
                />
              </div>
            )}
            {HTMLProjects[index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("HTML"));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <ReactProjectCard
                  imgSrc={HTMLProjects[index + 1].photo}
                  description={HTMLProjects[index + 1].description}
                />
              </div>
            )}

            {HTMLProjects[index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("HTML"));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <ReactProjectCard
                  imgSrc={HTMLProjects[index + 2].photo}
                  description={HTMLProjects[index + 2].description}
                />
              </div>
            )}
            {HTMLProjects[index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("HTML"));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <ReactProjectCard
                  imgSrc={HTMLProjects[index + 3].photo}
                  description={HTMLProjects[index + 3].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < HTMLProjects.length - 4) {
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

export default HTMLPorto;
