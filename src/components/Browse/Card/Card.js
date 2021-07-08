import React from "react";

import styles from "./Card.module.css";
import Showcase from "../../../containers/Showcase/Showcase";

const Card = (props) => {
  let cardStyle;

  switch (props.end) {
    case "first":
      cardStyle = `${styles.Card} ${styles.CardFirst}`;
      console.log(cardStyle);
      break;
    case "last":
      cardStyle = `${styles.Card} ${styles.CardLast}`;
      console.log(cardStyle);
      break;
    default:
      cardStyle = `${styles.Card}`;
  }

  let card = (
    <div className={cardStyle}>
      <Showcase vehicle={props.vehicle} />
    </div>
  );

  return card;
};

export default Card;
