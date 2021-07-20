import React from "react";

import styles from "./Sort.module.css";

const Sort = (props) => {
  return (
    <form>
      <label className={styles.Label}>
        Sort by
        <select className={styles.Select}>
          <option disabled hidden selected value="">
            Select One
          </option>
          <option value="price">Price</option>
          <option value="range">Range</option>
          <option value="charging time">Charging Time</option>
          <option value="horsepower">Horsepower</option>
        </select>
      </label>
      <label className={styles.Label}>
        Order
        <select className={styles.Select}>
          <option disabled hidden selected value="">
            Select One
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
    </form>
  );
};

export default Sort;
