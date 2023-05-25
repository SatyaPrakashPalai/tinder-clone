import React, { useState } from "react";
import styles from "./auth_modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
function AuthModal({ setShowModal }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["authmodal-wrapper"]}>
        <IconButton
          className={styles["close-button"]}
          onClick={() => {
            setShowModal(false);
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <div className={styles["form-wrapper"]}>
          <p className={styles["heading"]}>Create Account</p>
          <form className={styles["form"]}>
            <label>Email</label>
            <input
              className={styles["input"]}
              required="true"
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            <label>Password</label>
            <input
              className={styles["input"]}
              required="true"
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            <label>Confirm Password</label>
            <input
              className={styles["input"]}
              required="true"
              type="password"
              placeholder="confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                console.log(confirmPassword);
              }}
            />
            <input
              className={styles["input"]}
              type="submit"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
