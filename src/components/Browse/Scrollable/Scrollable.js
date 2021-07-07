import React from "react";

import styles from "./Scrollable.module.css";
import Card from "../Card/Card";

const Scrollable = (props) => {
  return (
    <div className={styles.Scrollable}>
      <div className={styles.ScrollableContainer}>
        <Card end="first" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card end="last" />
      </div>
    </div>
  );
};

export default Scrollable;
