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
          <select
            value={room}
            onChange={(event) => set_room(event.target.value)}
          >
            Choose a chatroom:
            <option selected disabled value="choose a room"></option>
            <option value="general">General</option>
            <option value="birds">Birds</option>
            <option value="bugs">Bugs</option>
            <option value="snakes">Snakes</option>
            <option value="turtles">Turtles</option>
            <option value="otherreptiles">Other reptiles</option>
            <option value="mammals">Mammals</option>
            <option value="fish">Fish</option>
            <option value="otheranimals">Other animals</option>
          </select>
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
