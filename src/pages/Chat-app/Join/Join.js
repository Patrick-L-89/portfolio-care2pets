import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join() {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");

  console.log("WHAT IS THE ROOM????");

  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="heading">Fill this in to continue:</h1>
        <div>
          <input
            placeholder="User name"
            className="joininput"
            type="text"
            onChange={(event) => set_name(event.target.value)}
          />
        </div>
        <div>
          <label for="cars">Choose a chatroom:</label>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Chatroom"
            className="joininput"
            type="text"
            onChange={(event) => set_room(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chatroom?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            {" "}
            Join the chat!
          </button>
        </Link>
      </div>
    </div>
  );
}
