import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from "./firebase";
function SidebarChat({ id, name, addnewChat }) {
  {
    /* generate random number */
  }
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const addNewChat = () => {
    const roomName = prompt("Enter a room name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName
      });
    }
  };

  return !addnewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={addNewChat}>
      <h2>Add a new Chat </h2>
    </div>
  );
}

export default SidebarChat;
