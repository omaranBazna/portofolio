import "./styles/react-porto.css";
import React from "react";
import ReactIcon from "./ReactIcon";
import ReactProjectCard from "./ReactProjectCard";

const ReactPorto = ({ scroll }) => {
  return (
    <div className="react-porto">
      <dic className="react-porto-content">
        <a href="https://reactjs.org/" target={"_blank"}>
          <div className="react-title">
            <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" />
            <h2>ReactJS</h2>
          </div>
        </a>
        <div className="react-porto-projects">Content</div>
      </dic>
    </div>
  );
};

export default ReactPorto;
