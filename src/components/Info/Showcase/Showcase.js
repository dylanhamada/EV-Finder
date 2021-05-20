import React from "react";

import styles from "./Showcase.module.css";

const Showcase = (props) => {
  let owner = props.result ? <p className={styles.Owner}>Your EV</p> : null;
  let details = null;
  let favorite = null;
  let remove = null;

  return (
    <div className={styles.Showcase}>
      {owner}
      <h3 className={styles.Title}>
        Meet the 2020 {props.vehicle.manufacturer} {props.vehicle.name}
      </h3>
      <img
        className={styles.Image}
        src={props.vehicle.photo}
        alt={`${props.vehicle.manufacturer}-${props.vehicle.name}`}
      />
    </div>
  );
};

export default Showcase;
