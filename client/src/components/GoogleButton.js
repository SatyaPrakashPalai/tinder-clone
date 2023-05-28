import React from 'react'
import styles from "./google-button.module.css"
import googleIcon from "../images/google.svg"
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function GoogleButton() {
    const handleLogin = () => {
    // setShowModal(true);
    // setNewUser(false);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className={styles["button-wrapper"]} onClick={handleLogin}>
    <div className={styles["icon-wrapper"]}><img className={styles["google-icon"]} src={googleIcon}/></div>
        <p className={styles['button-text']}>Continue with Google</p>
    </div>
  )
}

export default GoogleButton