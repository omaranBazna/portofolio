import "./styles/skill-portfolio.css";
import React from "react";

import SkillCard from "./SkillCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const SkillPortfolio = ({ setShow, skills }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="skill-porto">
      <div className="tags">
        {skills.map((skill) => {
          return (
            <div className="skill-title">
              <img src={skill[0].img} />
              <h3>{skill[0].name}</h3>
            </div>
          );
        })}
      </div>
      <dic className="skill-porto-content">
        <div className="skill-porto-projects-section">
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
          <div className="skill-porto-projects">
            {skills[0][index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skills[0][0].skillId));
                  dispatch(setProjectId(index));
                }}
              >
                <SkillCard
                  imgSrc={skills[0][index + 1].photo}
                  description={skills[0][index + 1].description}
                />
              </div>
            )}
            {skills[0][index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skills[0][0].skillId));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <SkillCard
                  imgSrc={skills[0][index + 2].photo}
                  description={skills[0][index + 2].description}
                />
              </div>
            )}

            {skills[0][index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skills[0][0].skillId));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <SkillCard
                  imgSrc={skills[0][index + 3].photo}
                  description={skills[0][index + 3].description}
                />
              </div>
            )}
            {skills[0][index + 4] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skills[0][0].skillId));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <SkillCard
                  imgSrc={skills[0][index + 4].photo}
                  description={skills[0][index + 4].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < skills[0].length - 5) {
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

export default SkillPortfolio;
