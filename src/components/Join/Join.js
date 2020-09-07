import React, { useState } from "react";
import Link from "react-router-dom";

export default function Join() {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 classname="heading">fill this in to continue:</h1>
        <div>
          <input
            placeholder="User name"
            classname="joininput"
            type="text"
            onChange={(event) => set_name(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Chatroom"
            classname="joininput"
            type="text"
            onChange={(event) => set_room(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
