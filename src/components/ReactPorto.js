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
              dispatch(setProjectId(0));
            }}
          >
            <ReactProjectCard
              imgSrc={ReactProjects[0].photo}
              description={ReactProjects[0].description}
            />
          </div>
        </div>
      </dic>
    </div>
  );
};

export default ReactPorto;
