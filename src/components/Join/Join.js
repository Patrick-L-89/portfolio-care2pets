import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join() {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="heading">fill this in to continue:</h1>
        <div>
          <input
            placeholder="User name"
            className="joininput"
            type="text"
            onChange={(event) => set_name(event.target.value)}
          />
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
