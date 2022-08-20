import React from "react";
import "./styles/popup.css";
import { useEffect } from "react";
const PopUpFail = ({ setPop }) => {
  useEffect(() => {
    setTimeout(() => {
      setPop(false);
    }, 2000);
  }, []);
  return (
    <div className="popUp">
      <div className="message-body">
        your message wasn't sent
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEH0CxQd6AXjImx7DuPRmjwMKkmMw2gOa8MZDNzA&s" />
      </div>
    </div>
  );
};

export default PopUpFail;
