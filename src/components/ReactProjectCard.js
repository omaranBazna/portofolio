import React from "react";
import "./styles/react-project-card.css";
const ReactProjectCard = ({ imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} />
      <p>
        This website is a clone to the real Disney website build using
        ReactJS,Styled components and firebase
      </p>
    </div>
  );
};

export default ReactProjectCard;
