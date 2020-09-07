import React from "react";

export default function Input() {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Your message here"
        value={message}
        onChange={(event) => set_message(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      >
        <button></button>
      </input>
    </form>
  );
}
