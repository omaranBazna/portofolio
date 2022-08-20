import "./styles/project-details.css";

import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
const ProjectDetails = () => {
  return (
    <div className="project-details">
      <img src="https://i.pinimg.com/originals/0b/bf/c7/0bbfc7ccf6eda7d4173eb795526de3a9.jpg"></img>
      <p>
        In this Project ,I cloned the official website of{" "}
        <a>Walt Disney Movies </a> using :
      </p>
      <div className="skills">
        <a href="https://reactjs.org/" target={"_blank"}>
          <span>ReactJS</span>
        </a>
        <a href="https://reactrouter.com/" target={"_blank"}>
          <span>React-Router</span>
        </a>
        <a href="https://react-redux.js.org/" target={"_blank"}>
          <span>React-Redux</span>
        </a>
        <a href="https://styled-components.com/" target={"_blank"}>
          <span>Styled-components</span>
        </a>
        <a href="https://firebase.google.com/" target={"_blank"}>
          <span>Firebase</span>
        </a>
      </div>
      <div className="icons">
        <span style={{ fontWeight: "600", fontSize: "20px" }}>
          Project Links:
        </span>
        <a href="https://github.com/omaranBazna/disney-clone" target={"_blank"}>
          <Button>
            <GitHubIcon className="github-icon" />
          </Button>
        </a>
        <a href="https://omaranbazna.github.io/disney-clone/" target={"_blank"}>
          <Button>
            <LanguageIcon className="hosting-icon" />
          </Button>
        </a>
        <Button>
          <CloseIcon className="close-icon" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
