import React, { useRef } from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const priceInputStart = useRef(null);
  const priceInputEnd = useRef(null);
  const rangeInputStart = useRef(null);
  const rangeInputEnd = useRef(null);
  const bodyTypeInput = useRef(null);
  const manufacturerInput = useRef(null);

  const validateForm = (...inputs) => {
    const inputNums = inputs.map((input) => Number(input));

    for (let i = 0; i <= inputNums.length; i++) {
      if (inputNums[i] < 0) {
        return false;
      }
    }

    if (inputNums[1] < inputNums[0] || inputNums[3] < inputNums[2]) {
      return false;
    }

    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();

    // make an array of the inputs
    // send array to validation function
    // validation function validates each input, changes style if error (red bg)
  };

  return (
    <form onSubmit={submitForm}>
      <label className={styles.Label}>
        Price
        <div className={styles.InputGroup}>
          <input
            className={styles.InputText}
            placeholder="From"
            ref={priceInputStart}
            type="number"
          />
          <input
            className={styles.InputText}
            placeholder="To"
            ref={priceInputEnd}
            type="number"
          />
        </div>
      </label>
      <label className={styles.Label}>
        Range
        <div className={styles.InputGroup}>
          <input
            type="number"
            ref={rangeInputStart}
            className={styles.InputText}
            placeholder="From"
          />
          <input
            type="number"
            ref={rangeInputEnd}
            className={styles.InputText}
            placeholder="To"
          />
        </div>
      </label>
      <label className={styles.Label}>
        Body Type
        <select ref={bodyTypeInput} className={styles.Select}>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </select>
      </label>
      <label className={styles.Label}>
        Manufacturer
        <select ref={manufacturerInput} className={styles.Select}>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Jaguar">Jaguar</option>
          <option value="KIA">KIA</option>
          <option value="Nissan">Nissan</option>
          <option value="Porsche">Porsche</option>
          <option value="Tesla">Tesla</option>
          <option value="Volkswagen">Volkswagen</option>
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

export default Filter;
