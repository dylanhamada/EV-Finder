import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  let userName = props.userName ? props.userName : "Driver";

  return (
    <div className={styles.User}>
      <img alt="User" className={styles.Photo} src={props.userPhoto} />
      <p className={styles.Paragraph}>Hello, {userName}.</p>
    </div>
  );
};

export default User;
