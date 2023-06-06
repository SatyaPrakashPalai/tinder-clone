import React from 'react'
import styles from "./chat-container.module.css"
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'

function ChatContainer({user}) {

  return (
    <div className={styles["chat-container"]}>
        <ChatHeader user={user}/>

        <div>
            <button className={styles["option"]}>Matches</button>
            <button className={styles["option"]}>Chat</button>
        </div>
        {/* <MatchesDisplay/> */}
        <ChatDisplay/>
    </div>
  )
}

export default ChatContainer