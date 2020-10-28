import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
import { useParams } from "react-router-dom";

export default function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = e => {
    e.preventDefault();
    console.log("input is ", input);
    setInput("");
  };
  return (
    <div className="chat">
      {/* header starts here */}
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room Name here</h3>
          <p> last seen here</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* body starts here */}
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"} `}>
          <span className="chat_name">Justin Bieber</span>
          Hey Guys, I just wanted to tell you that I making a clone of whatsapp
          <span className="chat_timestamp">3:52pm</span>
        </p>
      </div>
      {/* footer starts here */}
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
