import SkillPortfolio from "./components/SkillPortfolio";

/* import data base */

import { ReactProjects } from "./utilis/data";
import { ReactNativeProjects } from "./utilis/data";
import { JavaScriptProjects } from "./utilis/data";
import { HTMLProjects } from "./utilis/data";
import { UnityProjects } from "./utilis/data";

const MainPage = () => {
  return (
    <>
      {" "}
      <SkillPortfolio
        setShow={setShowProjectDetails}
        skills={[
          ReactProjects,
          ReactNativeProjects,
          JavaScriptProjects,
          HTMLProjects,
        ]}
      />
      <SkillPortfolio
        setShow={setShowProjectDetails}
        skills={[UnityProjects]}
      />
    </>
  );
};

export default MainPage;
