import React from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  let title = (
    <h3 className={styles.Title}>
      {props.vehicle.manufacturer} {props.vehicle.name}
    </h3>
  );

  if (props.result) {
    title = (
      <h3 className={styles.Title}>
        Meet the 2020 {props.vehicle.manufacturer} {props.vehicle.name}
      </h3>
    );
  }

  return title;
};

export default Title;
