import "./styles/skill-portfolio.css";
import React from "react";

import SkillCard from "./SkillCard";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCategory, setProjectId } from "../app/features/projectSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
const SkillPortfolio = ({ setShow, link, name, img, database, skillId }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  return (
    <div className="skill-porto">
      <dic className="skill-porto-content">
        <a href={link} target={"_blank"}>
          <div className="skill-title">
            <img src={img} />
            <h2>{name}</h2>
          </div>
        </a>
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
            {database[index] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skillId));
                  dispatch(setProjectId(index));
                }}
              >
                <SkillCard
                  imgSrc={database[index].photo}
                  description={database[index].description}
                />
              </div>
            )}
            {database[index + 1] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skillId));
                  dispatch(setProjectId(index + 1));
                }}
              >
                <SkillCard
                  imgSrc={database[index + 1].photo}
                  description={database[index + 1].description}
                />
              </div>
            )}

            {database[index + 2] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skillId));
                  dispatch(setProjectId(index + 2));
                }}
              >
                <SkillCard
                  imgSrc={database[index + 2].photo}
                  description={database[index + 2].description}
                />
              </div>
            )}
            {database[index + 3] && (
              <div
                onClick={() => {
                  setShow(true);
                  dispatch(setCategory(skillId));
                  dispatch(setProjectId(index + 3));
                }}
              >
                <SkillCard
                  imgSrc={database[index + 3].photo}
                  description={database[index + 3].description}
                />
              </div>
            )}
          </div>
          <Button
            className="controller-right"
            onClick={() => {
              if (index < database.length - 4) {
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
