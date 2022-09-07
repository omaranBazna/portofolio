import "./styles/skill-portfolio.css";
import React from "react";

import SkillCard from "./SkillCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SkillPortfolio = ({ skills }) => {
  const dispatch = useDispatch();
  const [tag, setTag] = useState(0);
  const [index, setIndex] = useState(0);
  let navigate = useNavigate();
  let color;

  return (
    <div className="skill-porto">
      <div className="tags">
        {skills.map((skill, ind) => {
          if (tag == ind) {
            color = skill[0].color;
          } else {
            color = "rgb(150,150,150)";
          }
          return (
            <div
              className="skill-title"
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setTag(ind);
                setIndex(0);
              }}
            >
              <img src={skill[0].img} />
              <h3>{skill[0].name}</h3>
            </div>
          );
        })}
      </div>
      <div
        className="skill-porto-content"
        style={{ backgroundColor: skills[tag][0].color }}
      >
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
            {skills[tag][index + 1] && (
              <div
                onClick={() => {
                  navigate("../project", { replace: true });
                  dispatch(setCategory(skills[tag][0].skillId));
                  dispatch(setProjectId(index));
                }}
              >
                <SkillCard
                  imgSrc={skills[tag][index + 1].photo}
                  description={skills[tag][index + 1].description}
                />
              </div>
            )}
            {skills[tag][index + 2] && (
              <div
                onClick={() => {
                  navigate("../project", { replace: true });
                  dispatch(setCategory(skills[tag][0].skillId));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <SkillCard
                  imgSrc={skills[tag][index + 2].photo}
                  description={skills[tag][index + 2].description}
                />
              </div>
            )}

            {skills[tag][index + 3] && (
              <div
                onClick={() => {
                  navigate("../project", { replace: true });
                  dispatch(setCategory(skills[tag][0].skillId));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <SkillCard
                  imgSrc={skills[tag][index + 3].photo}
                  description={skills[tag][index + 3].description}
                />
              </div>
            )}
            {skills[tag][index + 4] && (
              <div
                onClick={() => {
                  navigate("../project", { replace: true });
                  dispatch(setCategory(skills[tag][0].skillId));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <SkillCard
                  imgSrc={skills[tag][index + 4].photo}
                  description={skills[tag][index + 4].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < skills[tag].length - 5) {
                setIndex(index + 1);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillPortfolio;
