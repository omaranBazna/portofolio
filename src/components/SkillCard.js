import React from "react";
import "./styles/skill-card.css";
const SkillCard = ({ imgSrc, description, title }) => {
  return (
    <div className="card">
      {/*<img src={imgSrc} /> */}

      <h3>{title}</h3>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
