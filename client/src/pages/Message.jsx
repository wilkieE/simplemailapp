import React from "react";
import { useParams } from "react-router-dom";

const Message = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return null;
  }
  const { messageId } = useParams();
  const message = messages[messageId];

  return (
    <div className="message-component">
      <h1>{message.subject}</h1>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
