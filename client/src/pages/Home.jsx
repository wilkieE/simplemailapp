import React from "react";
import { Link } from "react-router-dom";

const Home = ({ unreadMessageCount, totalMessages }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        You have {unreadMessageCount} unread messages out of {totalMessages}{" "}
        total
      </p>
      <Link to="/inbox">
        <button>View Messages</button>
      </Link>
    </div>
  );
};

export default Home;
