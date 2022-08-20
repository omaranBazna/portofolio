import "./styles/react-porto.css";
import React from "react";
import ReactIcon from "./ReactIcon";
import ReactProjectCard from "./ReactProjectCard";

const ReactPorto = ({ scroll }) => {
  return (
    <div className="react-porto">
      <ReactIcon scroll={scroll} />
      <ReactProjectCard />
    </div>
  );
};

export default ReactPorto;
