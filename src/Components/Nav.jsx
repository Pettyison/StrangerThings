import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ userData }) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Stranger Things</h1>
      <h3>Logged in: {userData?.username}</h3>
      <button onClick={logout}>Log Out</button>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
      <Link to="/userinfo">Posts & Messages</Link>
      <Link to="/createpost">Post+</Link>
    </div>
  );
};
