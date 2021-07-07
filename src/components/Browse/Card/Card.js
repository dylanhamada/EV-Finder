import React from "react";

import styles from "./Card.module.css";
import Showcase from "../../../containers/Showcase/Showcase";

const Card = (props) => {
  let card = <div className={styles.Card}></div>;

  switch (props.end) {
    case "first":
      card = <div className={`${styles.Card} ${styles.CardFirst}`}>Card</div>;
      break;
    case "last":
      card = <div className={`${styles.Card} ${styles.CardLast}`}>Card</div>;
      break;
    default:
      card = <div className={styles.Card}>Card</div>;
  }

  return card;
};

export default Card;
