import React from "react";

import styles from "./Scrollable.module.css";
import Card from "../Card/Card";

const Scrollable = (props) => {
  const vehicleCards = props.vehicles.map((vehicle, index, array) => {
    switch (index) {
      case 0:
        return <Card key={vehicle.name} vehicle={vehicle} end="first" />;
      case array.length - 1:
        return <Card key={vehicle.name} vehicle={vehicle} end="last" />;
      default:
        return <Card key={vehicle.name} vehicle={vehicle} />;
    }
  });

  return (
    <React.Fragment>
      <div className={styles.Scrollable}>
        <div className={styles.ScrollableContainer}>{vehicleCards}</div>
      </div>
      <div className={styles.Buttons}>
        <span
          className={styles.Button}
          onClick={() => props.openFilterSort("filter")}
        >
          Filter
        </span>
        <span
          className={styles.Button}
          onClick={() => props.openFilterSort("sort")}
        >
          Sort
        </span>
      </div>
    </React.Fragment>
  );
};

export default Scrollable;
