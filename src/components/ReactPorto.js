import "./styles/react-porto.css";
import React from "react";
import { ReactProjects } from "../utilis/data";
import ReactProjectCard from "./ReactProjectCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";

const ReactPorto = ({ scroll, setShow }) => {
  const dispatch = useDispatch();
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
          {ReactProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory("ReactJS"));
                  dispatch(setProjectId(project.id));
                }}
              >
                <ReactProjectCard
                  imgSrc={project.photo}
                  description={project.description}
                />
              </div>
            );
          })}
        </div>
      </dic>
    </div>
  );
};

export default ReactPorto;
