import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    setUser({ username, password });
    console.log({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className=" flex flex-col p-4 justify-center items-center">
      <h2 className="mt-4 mb-4 text-2xl font-medium">Login Page</h2>
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-100 p-6 rounded-md flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            className="outline-none p-1 rounded-md border-2 border-gray-400 "
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            className="outline-none p-1 rounded-md border-2 border-gray-400 "
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-red-400 p-1 rounded-md text-white text-[18px] font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
}
