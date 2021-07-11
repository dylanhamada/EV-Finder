import React from "react";

import styles from "./Card.module.css";
import Showcase from "../../../containers/Showcase/Showcase";
import Specs from "../../Info/Specs/Specs";

const Card = (props) => {
  let cardStyle;
  let snapshot = ["price", "charging time", "range", "horsepower"];

  switch (props.end) {
    case "first":
      cardStyle = `${styles.Card} ${styles.CardFirst}`;
      break;
    case "last":
      cardStyle = `${styles.Card} ${styles.CardLast}`;
      break;
    default:
      cardStyle = `${styles.Card}`;
  }

  let card = (
    <div className={cardStyle}>
      <Showcase card vehicle={props.vehicle} />
      <Specs snapshot={snapshot} specs={props.vehicle} />
    </div>
  );

  return card;
};

export default Card;
