import "./styles/project-details.css";

import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux/es/exports";

import { selectProject } from "../app/features/projectSlice";
import { skills } from "../utilis/data";
const ProjectDetails = ({ setShow }) => {
  const project = useSelector(selectProject);

  return (
    <div className="project-details">
      <img src={project.cover}></img>
      <p>{project.detailsDescription}</p>
      <div className="skills">
        {project.skills.map((skill) => {
          return (
            <a
              href={skills[skill]}
              target={"_blank"}
              key={skill[0] + skill.length}
            >
              <span>{skill}</span>
            </a>
          );
        })}
      </div>
      <div className="icons">
        <span style={{ fontWeight: "600", fontSize: "20px" }}>
          Project Links:
        </span>
        <a className="btn" href={project.github} target={"_blank"}>
          <Button>
            <GitHubIcon className="github-icon" />
          </Button>
        </a>
        <a className="btn" href={project.url} target={"_blank"}>
          <Button>
            <LanguageIcon className="hosting-icon" />
          </Button>
        </a>
        <Button
          onClick={() => {
            setShow(false);
          }}
        >
          <CloseIcon className="close-icon" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
