import "./styles/react-porto.css";
import React from "react";

import ReactProjectCard from "./ReactProjectCard";

const ReactPorto = ({ scroll, setShow }) => {
  return (
    <div className="react-porto">
      <dic className="react-porto-content">
        <a href="https://reactjs.org/" target={"_blank"}>
          <div className="react-title">
            <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" />
            <h2>ReactJS</h2>
          </div>
        </a>
        <div className="react-porto-projects">
          <div
            onClick={() => {
              console.log("hello");
              setShow(true);
            }}
          >
            <ReactProjectCard imgSrc="https://www.disneychannel.ca/wp-content/themes/disney-child/assets/images/thumbnail-generic.jpg" />
          </div>
          <div
            onClick={() => {
              console.log("hello");
              setShow(true);
            }}
          >
            <ReactProjectCard imgSrc="https://pryormediacdn.azureedge.net/wordpress/2016/04/No-Hype-Social-Media-for-Business-LinkedIn.jpg" />
          </div>
          <div
            onClick={() => {
              console.log("hello");
              setShow(true);
            }}
          >
            <ReactProjectCard imgSrc="https://www.guidingtech.com/wp-content/uploads/slack-tips-tricks-fi_4d470f76dc99e18ad75087b1b8410ea9.jpg" />
          </div>
          <div
            onClick={() => {
              console.log("hello");
              setShow(true);
            }}
          >
            <ReactProjectCard imgSrc="https://techgameworld.com/wp-content/uploads/2022/01/Gmail-reaches-10-billion-downloads-on-the-Play-Store.jpg" />
          </div>
          <div
            onClick={() => {
              console.log("hello");
              setShow(true);
            }}
          >
            <ReactProjectCard imgSrc="https://images.ctfassets.net/b4k16c7lw5ut/6aR9X4qHgnnbxPxLlUhywh/0ca46f6fdae5448d4022e52061898933/image4.png?w=1920&h=1080&q=50&fm=png" />
          </div>
        </div>
      </dic>
    </div>
  );
};

export default ReactPorto;
