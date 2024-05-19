import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 p-4 rounded-md w-64 flex flex-col justify-center items-center text-2xl font-medium">
          Please Login
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 m-8 justify-center items-center">
      <h2 className="text-center text-2xl">Profile</h2>
      <div className="bg-gray-200 p-4 rounded-md min-w-64 flex flex-col justify-center items-center gap-4">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "gray",
            marginRight: "10px",
          }}
        ></div>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{user.username}</p>
      </div>
    </div>
  );
}
