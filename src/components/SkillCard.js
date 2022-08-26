import React from "react";
import "./styles/skill-card.css";
const SkillCard = ({ imgSrc, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} />
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
