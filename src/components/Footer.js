import "./styles/footer.css";

import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <Button>
          <GitHubIcon className="github-icon" />
        </Button>
      </div>
      <div className="contact-me"></div>
      <div className="resume"></div>
    </div>
  );
};

export default Footer;
