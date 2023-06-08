import React from "react";
import styles from "./avatar.module.css";
function Avatar({ user }) {
  //   const colors = [
  //     "azure",
  //     "aliceblue",
  //     "antiquewhite",
  //     "blanchedalmond",
  //     "cornsilk",
  //     "beige",
  //   ];

  //   const userIdBase10 = parseInt(user.user_id, 16);
  //   const colorIndex = userIdBase10 % colors.length;
  //   console.log(colorIndex);
  //   const color = colors[colorIndex];
  //   console.log(color);

  return (
    <div className={styles["img-container"]}>
      <div className={styles["text"]}>{user.first_name[0]}</div>
    </div>
  );
}

export default Avatar;
