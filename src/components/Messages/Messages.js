import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Messages() {
  return (
    <ScrollToBottom>
      {Messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
