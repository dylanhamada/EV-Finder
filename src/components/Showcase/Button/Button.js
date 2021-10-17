import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const Button = (props) => {
  let button = null;

  switch (props.buttonType) {
    case "details":
      button = (
        <Link className={styles.Details} to={`/browse/${props.vehicle}`}>
          Details
        </Link>
      );
      break;
    case "compare":
      button = (
        <span className={styles.Compare} onClick={() => props.click()}>
          Compare
        </span>
      );
      break;
    case "favorite":
      button = (
        <span className={styles.Favorite} onClick={() => props.click()}>
          Favorite
        </span>
      );
      break;
    case "unfavorite":
      button = (
        <span className={styles.Favorite} onClick={() => props.click()}>
          Unfavorite
        </span>
      );
      break;
    default:
      button = null;
  }

  return button;
};

export default Button;
