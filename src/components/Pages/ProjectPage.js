import React from "react";
import { useParams } from "react-router-dom";
const ProjectPage = () => {
  const { projectcategory, projectid } = useParams();

  return (
    <div>
      This is the Project Page {projectcategory} <p>{projectid}</p>
    </div>
  );
};

export default ProjectPage;
