import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../Textcontainer/Textcontainer";

import "./Chatroom.css";

let socket;

export default function Chatroom({ location }) {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");
  const [message, set_message] = useState("");
  const [messages, set_messages] = useState([]);
  const [users, setUsers] = useState("");
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

    socket.on("roomData", ({ users }) => {
      setUsers(users);
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
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          set_message={set_message}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}
