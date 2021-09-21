import React, { useEffect, useRef } from "react";

import styles from "./Sort.module.css";

const Sort = (props) => {
  const sortInput = useRef(null);
  const orderInput = useRef(null);

  useEffect(() => {
    sortInput.current.value = props.sortState[0];
    orderInput.current.value = props.sortState[1];
  }, [props.sortState]);

  const submitForm = (event) => {
    event.preventDefault();

    const selectInputs = [sortInput.current.value, orderInput.current.value];

    props.dispatchSort(selectInputs);

    props.closeSort();
  };

  return (
    <form onSubmit={submitForm}>
      <label className={styles.Label}>
        Sort by
        <select ref={sortInput} className={styles.Select}>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Range">Range</option>
          <option value="Charging Time">Charging Time</option>
          <option value="Horsepower">Horsepower</option>
        </select>
      </label>
      <label className={styles.Label}>
        Order
        <select ref={orderInput} className={styles.Select}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
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
