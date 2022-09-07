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
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
