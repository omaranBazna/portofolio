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
    <div>
      {projectcategory == "ReactJS" && (
        <div>
          <img className="cover" src={ReactProjects[projectid].cover} />
          <p>{ReactProjects[projectid].name}</p>
        </div>
      )}
      This is the Project Page {projectcategory} <p>{projectid}</p>
    </div>
  );
};

export default ProjectPage;
