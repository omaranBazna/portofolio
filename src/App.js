import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

import { useState, useEffect } from "react";
import ReactProto from "./components/ReactPorto";
import ReactNativePorto from "./components/ReactNativePorto";
import JavaScriptPorto from "./components/JavaScriptPorto";
import HTMLPorto from "./components/HTMLPorto";
import Email from "./components/Email";
import PopUpSucc from "./components/PopUpSucc";
import PopUpFail from "./components/PopUpFail";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [popUpSuc, setPopUpSuc] = useState(false);
  const [popUpFail, setPopUpFail] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  return (
    <div className="App">
      <HeroSection />
      <ReactProto setShow={setShowProjectDetails} />
      <ReactNativePorto setShow={setShowProjectDetails} />
      <JavaScriptPorto setShow={setShowProjectDetails} />
      <HTMLPorto setShow={setShowProjectDetails} />
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
