import "./styles/react-porto.css";
import React from "react";
import { ReactProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
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
        <div className="react-porto-projects">
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
        </div>

        <div className="controller">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </dic>
    </div>
  );
};

export default ReactPorto;
