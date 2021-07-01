import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  let button = null;

  switch (props.buttonType) {
    case "favorite":
      button = (
        <span className={styles.Favorite} onClick={() => props.click()}>
          Favorite
        </span>
      );
      break;
    default:
      button = null;
  }

  return button;
};

export default Button;
