import "./styles/hero-section.css";

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
        <div className="hero-right"></div>
      </div>
    </div>
  );
};

export default HeroSection;
