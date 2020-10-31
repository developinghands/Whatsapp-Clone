import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core/";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot =>
      setRooms(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      {/*1. Sidebar Header*/}
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            {" "}
            {/**Wrapping buttons inside <IconButton> gives nice effects to buttons */}
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/*2. Sidebar Search*/}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search a chat" type="text" size="16" />
        </div>
      </div>
      {/*3. Sidebar Chats*/}
      <div className="sidebar_chats">
        <SidebarChat addnewChat />
        {/*  */}
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
