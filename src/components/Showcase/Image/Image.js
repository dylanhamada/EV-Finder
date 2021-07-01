import React from "react";

import styles from "./Image.module.css";

const Image = (props) => {
  return (
    <img
      className={styles.Image}
      src={props.vehicle.photo}
      alt={`${props.vehicle.manufacturer} ${props.vehicle.name}`}
    />
  );
};

export default Image;
