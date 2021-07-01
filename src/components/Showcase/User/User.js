import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  let user = (
    <div className={styles.User}>
      <span>Your EV</span>
    </div>
  );

  if (props.user) {
    const regex = /(\w*)/;
    const firstName = props.user.name.match(regex)[0];

    user = (
      <div className={styles.User}>
        <img alt="User" className={styles.Photo} src={props.user.photoURL} />
        <span>{firstName}'s EV</span>
      </div>
    );
  }

  return user;
};

export default User;
