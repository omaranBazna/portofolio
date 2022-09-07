import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import {
  HTMLProjects,
  ReactProjects,
  ReactNativeProjects,
  JavaScriptProjects,
  UnityProjects,
} from "../../utilis/data";
const ProjectPage = () => {
  const { projectcategory, projectid } = useParams();

  return (
    <div className="project-page">
      {projectcategory == "ReactJS" && (
        <div>
          <h1>{ReactProjects[projectid].name}</h1>

          <div className="description">
            {ReactProjects[projectid].description}
          </div>

          <div className="skills">
            <h2>Skills</h2>

            <div className="line" />
          </div>
          <div className="skills-container">
            {ReactProjects[projectid].skills.map((skill) => {
              return (
                <div className="skill-item" key={skill.length + skill[0]}>
                  <a href="#">{skill} </a>
                  <div className="skill-underline"></div>
                </div>
              );
            })}
          </div>

          <div className="challenges">
            <h2>Challenges</h2>

            <div className="line" />
          </div>
          <div className="challenges-container">
            {ReactProjects[projectid].skills.map((skill) => {
              return (
                <div className="skill-item" key={skill.length + skill[0]}>
                  <a href="#">{skill} </a>
                  <div className="skill-underline"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
