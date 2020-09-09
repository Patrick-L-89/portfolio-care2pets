import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectToken } from "../../../store/user/selectors";

import "./Join.css";

export default function Join() {
  let [name, set_name] = useState("");
  const [room, set_room] = useState("");
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="heading">Fill this in to continue:</h1>
        <div>
          {token ? (
            (name = user.userName)
          ) : (
            <input
              placeholder="User name"
              className="joininput"
              type="text"
              onChange={(event) => set_name(event.target.value)}
            />
          )}
        </div>
        <div>
          <select
            value={room}
            onChange={(event) => set_room(event.target.value)}
          >
            Choose a chatroom:
            <option selected disabled>
              choose a room
            </option>
            <option value="General">General</option>
            <option value="Birds">Birds</option>
            <option value="Bugs">Bugs</option>
            <option value="Snakes">Snakes</option>
            <option value="Turtles">Turtles</option>
            <option value="OtherReptiles">Other reptiles</option>
            <option value="Mammals">Mammals</option>
            <option value="Fish">Fish</option>
            <option value="OtherAnimals">Other animals</option>
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
