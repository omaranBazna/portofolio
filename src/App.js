import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

import { useState, useEffect } from "react";
import Email from "./components/Email";
import PopUpSucc from "./components/PopUpSucc";
import PopUpFail from "./components/PopUpFail";
import ProjectDetails from "./components/ProjectDetails";
import SkillPortfolio from "./components/SkillPortfolio";

/* import data base */

import { ReactProjects } from "./utilis/data";
import { ReactNativeProjects } from "./utilis/data";
import { JavaScriptProjects } from "./utilis/data";
import { HTMLProjects } from "./utilis/data";
import { UnityProjects } from "./utilis/data";
function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [popUpSuc, setPopUpSuc] = useState(false);
  const [popUpFail, setPopUpFail] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  return (
    <div className="App">
      <HeroSection />

      {/* React Portfolio*/}
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

      {showProjectDetails && <ProjectDetails setShow={setShowProjectDetails} />}

      {popUpSuc && <PopUpSucc setPop={setPopUpSuc} />}
      {popUpFail && <PopUpFail setPop={setPopUpFail} />}
      {showEmailForm && (
        <Email
          setShow={setShowEmailForm}
          setPopSuc={setPopUpSuc}
          setPopFail={setPopUpFail}
        />
      )}
      <Footer setShow={setShowEmailForm} />
    </div>
  );
}

export default App;
