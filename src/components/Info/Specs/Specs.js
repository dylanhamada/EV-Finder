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

  if (props.snapshot) {
    order = props.snapshot;
  }

  const details = order.map((detail) => {
    return (
      <div key={detail}>
        <p className={styles.Detail}>{detail}</p>
        <p className={styles.Figure}>{props.specs[detail]}</p>
      </div>
    );
  });

  return <div className={styles.Specs}>{details}</div>;
};

export default Specs;
