import "./styles/hero-section.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-image">
            <img src="/images/omaran.jpg" />
          </div>
          <div className="hero-text">
            <h1>OMARAN BAZNA</h1>
            <h3>full stack developer</h3>
            <p>
              It is my pleasure to welcome you to my website. Feel free to
              contact me at any time
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero-right">
          <h1>Contacts</h1>
          <h4>
            <PhoneIcon /> <a href="tel:+1 313 677 5744"> +1 (313) 677-5744</a>
          </h4>
          <h4>
            <MarkunreadIcon />{" "}
            <a href="mailto:omran4d@gmail.com"> omran4d@gmail.com</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
