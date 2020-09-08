import React from "react";

import onlineIcon from "../../../Icons/onlineIcon.png";
import closeIcon from "../../../Icons/closeIcon.png";

import "./InfoBar.css";

export default function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
        <div className="rightInnerContainer">
          <a href="/">
            <img src={closeIcon} alt="close image" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
