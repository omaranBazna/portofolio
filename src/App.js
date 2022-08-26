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
        database={ReactProjects}
        name="ReactJS"
        skillId="ReactJS"
        img="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
        link="https://reactjs.org/"
      />

      {/* React Native Portfolio*/}
      <SkillPortfolio
        setShow={setShowProjectDetails}
        database={ReactNativeProjects}
        name="React-Native"
        skillId="ReactNative"
        img="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
        link="https://reactnative.dev/"
      />

      {/* JavaScript  Portfolio*/}
      <SkillPortfolio
        setShow={setShowProjectDetails}
        database={JavaScriptProjects}
        name="JavaScript"
        skillId="JavaScript"
        img="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png"
        link="https://www.javascript.com/"
      />

      {/* HTML  Portfolio*/}
      <SkillPortfolio
        setShow={setShowProjectDetails}
        database={HTMLProjects}
        name="HTML&CSS"
        skillId="HTML"
        img="https://cdn-icons-png.flaticon.com/512/1199/1199113.png?w=360"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />

      {/* Unity Portfolio*/}
      <SkillPortfolio
        setShow={setShowProjectDetails}
        database={UnityProjects}
        name="Unity3D C#"
        skillId="Unity"
        img="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Unity.png"
        link="https://unity.com/"
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
