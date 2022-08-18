import "./styles/footer.css";

import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <Button>
          <GitHubIcon className="github-icon" />
        </Button>
        <Button>
          <LinkedInIcon className="linked-in-icon" />
        </Button>
      </div>
      <div className="separate"></div>
      <div className="contact-me">
        <Button>
          <EmailIcon className="email-icon" />
        </Button>
      </div>
      <div className="resume"></div>
    </div>
  );
};

export default Footer;
