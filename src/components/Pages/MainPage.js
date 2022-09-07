import SkillPortfolio from "../SkillPortfolio";
/* import data base */
/*./src/components/Pages/MainPage.js */
import {
  HTMLProjects,
  ReactProjects,
  ReactNativeProjects,
  JavaScriptProjects,
  UnityProjects,
} from "../../utilis/data";

import { useState } from "react";
const MainPage = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  return (
    <>
      {" "}
      <SkillPortfolio
        skills={[
          ReactProjects,
          ReactNativeProjects,
          JavaScriptProjects,
          HTMLProjects,
        ]}
      />
      <SkillPortfolio skills={[UnityProjects]} />
    </>
  );
};

export default MainPage;
