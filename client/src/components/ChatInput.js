import React, { useState } from 'react'
import styles from "./chat-display.module.css"

function ChatInput() {
    const [textArea,setTextArea]=useState(null);
  return (
    <div className={styles["chat-input"]}>
    <textarea value={textArea} onChange={(e)=>{setTextArea(e.target.value)}}/>
    <button className={styles["secondary-button"]}>submit</button>
    </div>
  )
}

export default ChatInput