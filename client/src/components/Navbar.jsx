import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userName, unreadCount }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-center">
        <h1>
          {userName} - {unreadCount} unread Messages
        </h1>
      </div>
      <div className="navbar-right">
        <Link to="/inbox">Inbox</Link>
      </div>
    </div>
  );
};

export default Navbar;
