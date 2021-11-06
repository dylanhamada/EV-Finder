import React from "react";

import styles from "./Specs.module.css";

const Specs = (props) => {
  let order = [
    "price",
    "range",
    "body type",
    "seat capacity",
    "horsepower",
    "charging time",
    "battery",
    "fuel economy",
    "brakes",
    "cargo capacity",
    "dimensions",
    "weight",
  ];
  let figureStyle = null;

  if (props.snapshot) {
    order = props.snapshot;
  }

  const details = order.map((detail, index) => {
    if (props.comparison) {
      switch (props.comparison[index]) {
        case true:
          figureStyle = styles.Superior;
          break;
        case false:
          figureStyle = styles.Inferior;
          break;
        default:
          figureStyle = null;
      }
    }

    return (
      <div key={detail}>
        <p className={styles.Detail}>{detail}</p>
        <p className={`${styles.Figure} ${figureStyle}`}>
          {props.specs[detail]}
        </p>
      </div>
    );
  });

  return <div className={styles.Specs}>{details}</div>;
};

export default Specs;
