import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";

import "./Chatroom.css";

let socket;

export default function Chatroom({ location }) {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");
  const [message, set_message] = useState("");
  const [messages, set_messages] = useState([]);
  const endPoint = `localhost:4000`; //TODO: CHANGE WHEN UPLOAD

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(endPoint);

    set_name(name);
    set_room(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endPoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      set_messages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => set_message(""));
    }
  };

  console.log("what are my messages", messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <input
          value={message}
          onChange={(event) => set_message(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  );
}
