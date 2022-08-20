import React from "react";
import "./styles/popup.css";
import { useEffect } from "react";
const PopUpSucc = ({ setPop }) => {
  useEffect(() => {
    setTimeout(() => {
      setPop(false);
    }, 2000);
  }, []);
  return (
    <div className="popUp">
      <div className="message-body">
        your message was sent successfully
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RjzpwD44bg-UZlrqT3ARkiibAhAMvxxdx6gxysU&s" />
      </div>
    </div>
  );
};

export default PopUpSucc;
