import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

export default function Chatroom({ location }) {
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log("what is our location?", name);
    console.log("what is my data?", room);
  });

  return <div>This will be the Chatroom</div>;
}
