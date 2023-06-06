import React from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";

function ChatDisplay() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatDisplay;
