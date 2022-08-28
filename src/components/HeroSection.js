import "./styles/hero-section.css";

import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/images/omaran.jpg" />
        </div>
        <div className="hero-text">
          <h1>OMARAN BAZNA</h1>
          <h4>full stack developer</h4>
          <p>
            It is my pleasure to welcome you to my website. Feel free to contact
            me at any time
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
