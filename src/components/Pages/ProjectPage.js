import React from "react";
import { useParams } from "react-router-dom";

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
      {projectcategory == "react" && (
        <div>
          <div>{<img src={ReactProjects[projectid].img} />}</div>
        </div>
      )}
      This is the Project Page {projectcategory} <p>{projectid}</p>
    </div>
  );
};

export default ProjectPage;
