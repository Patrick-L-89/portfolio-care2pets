import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

export default function Chatroom({ location }) {
  const [name, set_name] = useState("");
  const [room, set_room] = useState("");
  const endPoint = `localhost:4000`; //TODO: CHANGE WHEN UPLOAD

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(endPoint);

    set_name(name);
    set_room(room);

    socket.emit("join", { name, room }, ({ error }) => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endPoint, location.search]);

  return <div>This will be the Chatroom</div>;
}
