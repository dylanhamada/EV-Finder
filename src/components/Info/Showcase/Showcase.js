import React from "react";

import styles from "./Showcase.module.css";

const Showcase = (props) => {
  let user = null;

  if (props.user.name !== null) {
    const regex = /(\w*)/;
    const firstName = props.user.name.match(regex)[0];
    user = (
      <div className={styles.User}>
        <img alt="User" className={styles.Photo} src={props.user.photoURL} />
        <span>{firstName}'s EV</span>
      </div>
    );
  }

  return (
    <div className={styles.Showcase}>
      {user}
      <h3 className={styles.Title}>
        Meet the 2020 {props.vehicle.manufacturer} {props.vehicle.name}
      </h3>
      <img
        className={styles.Image}
        src={props.vehicle.photo}
        alt={`${props.vehicle.manufacturer} ${props.vehicle.name}`}
      />
    </div>
  );
};

export default Showcase;
