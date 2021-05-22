import React from "react";

import styles from "./Specs.module.css";

const Specs = (props) => {
  const order = [
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

  const details = order.map((detail) => {
    return (
      <div>
        <p className={styles.Detail}>{detail}</p>
        <p className={styles.Figure}>{props.specs[detail]}</p>
      </div>
    );
  });

  return <div className={styles.Specs}>{details}</div>;
};

export default Specs;
