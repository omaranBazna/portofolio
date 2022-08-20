import "./styles/time-line.css";
import Technology from "./Technology";
import React from "react";

const Timeline = ({ scroll }) => {
  return (
    <div className="time-line">
      <div
        style={{
          width: "7px",
          height: `${scroll * 90}%`,
          background: "white",
          position: "absolute",
          top: "00%",
          transform: `translate(-1px,-${0}%)`,
          borderRadius: "2px 2px 2px 2px",
        }}
      />

      <div className="whole-time-line">
        <img
          src="/images/react-js-icon.png"
          className={scroll > 0 && scroll < 0.25 ? "active" : "in-active"}
        />
        <img
          src="/images/Unity.png"
          className={scroll > 0.25 && scroll < 0.5 ? "active" : "in-active"}
        />
        <img
          src="/images/teacher.png"
          className={scroll > 0.5 && scroll < 0.75 ? "active" : "in-active"}
        />
        <img
          src="/images/certificate.png"
          className={scroll > 0.75 && scroll < 1 ? "active" : "in-active"}
        />
      </div>
    </div>
  );
};

export default Timeline;
