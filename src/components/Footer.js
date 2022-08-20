import "./styles/footer.css";

import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = ({ setShow }) => {
  return (
    <div className="footer">
      <div className="social">
        <Button>
          <GitHubIcon className="github-icon" />
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/omaran-bazna-64234b102/"
            target="_blank"
          >
            <LinkedInIcon className="linked-in-icon" />
          </a>
        </Button>
      </div>
      <div className="separate"></div>
      <div className="contact-me">
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
          <EmailIcon className="email-icon" />
        </Button>
      </div>
      <div className="resume"></div>
    </div>
  );
};

export default Footer;
