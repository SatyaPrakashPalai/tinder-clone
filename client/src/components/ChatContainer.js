import React, { useState } from "react";
import styles from "./chat-container.module.css";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";

function ChatContainer({ user }) {
  const [chat, setChat] = useState(false);
  const [match, setMatch] = useState(false);

  const handleChat = () => {
    setChat(true);
    setMatch(false);
  };
  const handleMatch = () => {
    setChat(false);
    setMatch(true);
  };

  return (
    <div className={styles["chat-container"]}>
      <ChatHeader user={user} />
      <div>
        <button className={styles["option"]} onClick={handleMatch}>
          Matches
        </button>
        <button className={styles["option"]} onClick={handleChat}>
          Chat
        </button>
      </div>
      {match &&
        (user.matches.length > 0 ? (
          <MatchesDisplay matches={user.matches} />
        ) : (
          <p>No matches found.</p>
        ))}
      {chat && <ChatDisplay />}
    </div>
  );
}

export default ChatContainer;
