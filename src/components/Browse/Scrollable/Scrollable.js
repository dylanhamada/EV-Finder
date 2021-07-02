import React from "react";

import styles from "./Scrollable.module.css";
import Card from "../Card/Card";

const Scrollable = (props) => {
  return (
    <div className={styles.Scrollable}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Scrollable;
