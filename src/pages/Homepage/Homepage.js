import React from "react";
import "./Homepage.css";

import logo from "../../Icons/LargeLogo.png";

export default function Homepage() {
  return (
    <div className="Homepage">
      <h1>Welcome!</h1>
      <img src={logo} alt="Our beautiful logo" />
    </div>
  );
}
