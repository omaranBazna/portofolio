import React from "react";
import "./styles/react-project-card.css";
const ReactProjectCard = ({ imgSrc, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} />
      <p>{description}</p>
    </div>
  );
};

export default ReactProjectCard;
