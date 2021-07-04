import React from "react";

import styles from "./Scrollable.module.css";
import Card from "../Card/Card";

const Scrollable = (props) => {
  const divStyle = {
    columnGap: "10px",
    display: "grid",
    gridAutoFlow: "column",
  };

  const spacerStyle = {
    width: "30px",
  };

  return (
    <div className={styles.Scrollable}>
      <div style={spacerStyle} />
      <div style={divStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div style={spacerStyle} />
    </div>
  );
};

export default Scrollable;
