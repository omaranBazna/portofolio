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

import { useNavigate } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
const ProjectPage = () => {
  const { projectcategory, projectid } = useParams();
  let navigate = useNavigate();
  return (
    <div className="project-page">
      <div
        className="back-to-home"
        onClick={() => {
          navigate("/", { replace: false });
        }}
      >
        <h2>Back To Home</h2> <HomeIcon className="home-icon" />
      </div>
      {projectcategory == "ReactJS" && (
        <div>
          <div className="description">
            <div className="header">
              <h1>{ReactProjects[projectid].name}</h1>
              <a href="">
                {" "}
                {ReactProjects[projectid].github != "" && (
                  <a href={ReactProjects[projectid].github} target="_blank">
                    <GitHubIcon className="github-project-icon" />
                  </a>
                )}
                <a href={ReactProjects[projectid].url} target="_blank">
                  <LanguageIcon className="website-icon" />
                </a>
              </a>
            </div>
            <hr />
            {ReactProjects[projectid].description
              .split("newLine")
              .map((item) => {
                return (
                  <div>
                    <br />
                    {item}
                    <br />
                  </div>
                );
              })}
            <br></br>
            <br></br>

            {ReactProjects[projectid].url != "" && (
              <a
                href={ReactProjects[projectid].url}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Live Demo
              </a>
            )}
            {ReactProjects[projectid].github != "" && (
              <a
                href={ReactProjects[projectid].github}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Github repo
              </a>
            )}
          </div>

          {/*
          <div className="skills">
            <h2>Skills</h2>

            <div className="line" />
          </div>
          <div className="skills-container">
            {ReactProjects[projectid].skills.map((skill) => {
              return (
                <div className="skill-item" key={skill.length + skill[0]}>
                  <a href="#">{skill} </a>
                  <div className="skill-underline"></div>
                </div>
              );
            })}
          </div>
        
          <div className="challenges">
            <h2>Challenges</h2>

            <div className="line" />
          </div>
          <div className="challenges-container">
            In this uniq project ,I have to ....pluh pluh pluh .... so I do
            ...pluh pluh .. which result in ...pluh pluh pluh
          </div>
     
          <div className="video-demo">
            <h2>Demo</h2>

            <div className="line" />
          </div>
          <div className="demo-container">
            <iframe
              style={{ borderRadius: 25 }}
              width="600"
              height="450"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          */}
        </div>
      )}

      {projectcategory == "JavaScript" && (
        <div>
          <div className="description">
            <div className="header">
              <h1>{JavaScriptProjects[projectid].name}</h1>
              <a href="">
                {JavaScriptProjects[projectid].github != "" && (
                  <a
                    href={JavaScriptProjects[projectid].github}
                    target="_blank"
                  >
                    <GitHubIcon className="github-project-icon" />
                  </a>
                )}
                <a href={JavaScriptProjects[projectid].url} target="_blank">
                  <LanguageIcon className="website-icon" />
                </a>
              </a>
            </div>
            <hr />
            {JavaScriptProjects[projectid].description
              .split("newLine")
              .map((item) => {
                return (
                  <div>
                    <br />
                    {item}
                    <br />
                  </div>
                );
              })}
            <br></br>
            <br></br>
            {JavaScriptProjects[projectid].url != "" && (
              <a
                href={JavaScriptProjects[projectid].url}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Live Demo
              </a>
            )}
            {JavaScriptProjects[projectid].github != "" && (
              <a
                href={JavaScriptProjects[projectid].github}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Github repo
              </a>
            )}
          </div>
        </div>
      )}

      {projectcategory == "HTML" && (
        <div>
          <div className="description">
            <div className="header">
              <h1>{HTMLProjects[projectid].name}</h1>
              <a href="">
                {HTMLProjects[projectid].github != "" && (
                  <a href={HTMLProjects[projectid].github} target="_blank">
                    <GitHubIcon className="github-project-icon" />
                  </a>
                )}
                <a href={HTMLProjects[projectid].url} target="_blank">
                  <LanguageIcon className="website-icon" />
                </a>
              </a>
            </div>
            <hr />
            {HTMLProjects[projectid].description
              .split("newLine")
              .map((item) => {
                return (
                  <div>
                    <br />
                    {item}
                    <br />
                  </div>
                );
              })}
            <br></br>
            <br></br>
            {HTMLProjects[projectid].url != "" && (
              <a
                href={HTMLProjects[projectid].url}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Live Demo
              </a>
            )}
            {HTMLProjects[projectid].github != "" && (
              <a
                href={HTMLProjects[projectid].github}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Github repo
              </a>
            )}
          </div>
        </div>
      )}

      {projectcategory == "Unity" && (
        <div>
          <div className="description">
            <div className="header">
              <h1>{UnityProjects[projectid].name}</h1>
              <a href="">
                {" "}
                {UnityProjects[projectid].github != "" && (
                  <a href={UnityProjects[projectid].github} target="_blank">
                    <GitHubIcon className="github-project-icon" />
                  </a>
                )}
                <a href={UnityProjects[projectid].url} target="_blank">
                  <LanguageIcon className="website-icon" />
                </a>
              </a>
            </div>
            <hr />
            {UnityProjects[projectid].description
              .split("newLine")
              .map((item) => {
                return (
                  <div>
                    <br />
                    {item}
                    <br />
                  </div>
                );
              })}
            <br></br>
            <br></br>
            {UnityProjects[projectid].url != "" && (
              <a
                href={UnityProjects[projectid].url}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Live Demo
              </a>
            )}
            {UnityProjects[projectid].github != "" && (
              <a
                href={UnityProjects[projectid].github}
                target="_blank"
                style={{
                  border: "2px solid white",
                  borderRadius: 10,
                  padding: 20,
                  cursor: "pointer",
                  margin: 10,
                }}
              >
                Check Github repo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
