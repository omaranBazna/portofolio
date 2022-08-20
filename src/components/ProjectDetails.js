import "./styles/project-details.css";

import React from "react";

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
      <div className="icons"></div>
    </div>
  );
};

export default ProjectDetails;
