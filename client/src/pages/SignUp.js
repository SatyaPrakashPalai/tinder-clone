import React, { useState } from "react";
import styles from "./signup.module.css";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
function SignUp() {
  const authToken = true;
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
    console.log(showModal);
  };
  return (
    <div className={styles["overlay"]}>
      <Navbar />
      {/* <div className={styles["overlay"]}></div> */}
      <div className={styles["center"]}>
        <p className={styles["center_text"]}>Start something epic.</p>
        <button onClick={handleClick} className={styles["primary_button"]}>
          Create account
        </button>
      </div>
      {showModal && <AuthModal setShowModal={setShowModal} />}
    </div>
  );
}

export default SignUp;
