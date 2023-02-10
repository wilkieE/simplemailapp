import React from "react";
import { Link } from "react-router-dom";

const Inbox = ({ messages, updateMessages }) => {
  return (
    <div>
      <h1>Messages</h1>
      <ul className="message-list">
        {messages.map((message, idx) => (
          <li key={idx}>
            <Link onClick={() => updateMessages(idx)} to={`/message/${idx}`}>
              <div className="message-item">
                <h2>
                  {message.subject} {message.isRead ? "(read)" : "(unread)"}
                </h2>
                <p>
                  {message.isRead
                    ? message.content
                    : message.content.split(" ").slice(0, 3).join(" ") + "..."}
                </p>
              </div>
              {/* <p>{message.isRead ? "Read" : "Unread"}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
