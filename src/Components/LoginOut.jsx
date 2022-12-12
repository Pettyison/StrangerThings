import React from "react";
import { useState } from "react";
import { LogInUser } from "../api/auth";

export const LogIn = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const token = await LogInUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
            const redirHome = () => {
              window.location.href = "/";
            };
            redirHome();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <input
          name="username"
          value={username}
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
