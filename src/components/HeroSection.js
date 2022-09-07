import "./styles/hero-section.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src="https://i.ibb.co/rF35ZMX/low-res2.jpg/images/omaran.jpg" />
        </div>

        <div className="hero-left">
          <div className="hero-text">
            <h1>OMARAN BAZNA</h1>
            <h3>Full Stack Developer</h3>
            <p>
              It is my pleasure to welcome you to my website. Feel free to
              contact me at any time
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero-right">
          <h4>
            <PhoneIcon /> <a href="tel:+1 313 677 5744"> +1 (313) 677-5744</a>
          </h4>
          <h4>
            <MarkunreadIcon />{" "}
            <a href="mailto:omran4d@gmail.com"> omran4d@gmail.com</a>
          </h4>
          <h4>
            <LocationOnIcon /> <a>Michigan,USA</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
