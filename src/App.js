import "./App.css";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import Email from "./components/Email";
import PopUpSucc from "./components/PopUpSucc";
import PopUpFail from "./components/PopUpFail";
import ProjectDetails from "./components/ProjectDetails";

/*import for particles */
import ParticlesComponent from "./components/ParticlesComponent";
import MainPage from "./components/Pages/MainPage";
import ProjectPage from "./components/Pages/ProjectPage";
import { Routes, Route } from "react-router-dom";
function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [popUpSuc, setPopUpSuc] = useState(false);
  const [popUpFail, setPopUpFail] = useState(false);

  return (
    <div className="App">
      <ParticlesComponent />

      {/*showProjectDetails && <ProjectDetails setShow={setShowProjectDetails} />*/}

      <Routes>
        <Route path="/main" element={<MainPage />} />

        <Route path="/project" element={<ProjectPage />} />
      </Routes>

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
