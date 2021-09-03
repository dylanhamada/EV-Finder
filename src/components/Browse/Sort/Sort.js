import React, { useRef } from "react";

import styles from "./Sort.module.css";

const Sort = () => {
  const sortInput = useRef(null);
  const orderInput = useRef(null);

  return (
    <form>
      <label className={styles.Label}>
        Sort by
        <select ref={sortInput} className={styles.Select}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="range">Range</option>
          <option value="charging time">Charging Time</option>
          <option value="horsepower">Horsepower</option>
        </select>
      </label>
      <label className={styles.Label}>
        Order
        <select ref={orderInput} className={styles.Select}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
      <div className={styles.ButtonGroup}>
        <button className={`${styles.Button} ${styles.ButtonLeft}`}>
          Reset
        </button>
        <button
          type="submit"
          className={`${styles.Button} ${styles.ButtonRight}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sort;
