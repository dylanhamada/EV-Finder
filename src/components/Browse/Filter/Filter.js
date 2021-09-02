import React, { useRef } from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const inputPriceStart = useRef(null);
  const inputPriceEnd = useRef(null);
  const inputRangeStart = useRef(null);
  const inputRangeEnd = useRef(null);
  const inputBodyType = useRef(null);
  const inputManufacturer = useRef(null);
  let inputStyle = `${styles.InputText}`;
  let inputErrorStyle = `${styles.InputText} ${styles.InputTextError}`;

  const inputChangeHandler = (event) => {
    event.target.className = inputStyle;
  };

  const validateForm = () => {
    const textInputs = [
      inputPriceStart,
      inputPriceEnd,
      inputRangeStart,
      inputRangeEnd,
    ];
    const inputNums = textInputs.map((input) => Number(input.current.value));
    let valid = true;

    for (let i = 0; i <= inputNums.length; i++) {
      if (inputNums[i] < 0) {
        textInputs[i].current.className = inputErrorStyle;
        valid = false;
      }
    }

    for (let i = 1; i <= inputNums.length; i += 2) {
      if (inputNums[i] === 0) {
        inputNums[i] = 1000000;
      } else if (inputNums[i] < inputNums[i - 1]) {
        textInputs[i].current.className = inputErrorStyle;
        valid = false;
      }
    }

    return valid ? inputNums : false;
  };

  const submitForm = (event) => {
    event.preventDefault();

    const validatedInputs = validateForm();
    if (validatedInputs) {
      validatedInputs.push(
        inputBodyType.current.value,
        inputManufacturer.current.value
      );
    }

    props.dispatchFilter(validatedInputs);

    props.closeFilter();
  };

  const resetForm = (event) => {
    event.preventDefault();

    inputPriceStart.current.value = "";
    inputPriceEnd.current.value = "";
    inputRangeStart.current.value = "";
    inputRangeEnd.current.value = "";
    inputBodyType.current.value = "All";
    inputManufacturer.current.value = "All";

    submitForm(event);
  };

  return (
    <form onSubmit={submitForm}>
      <label className={styles.Label}>
        Price
        <div className={styles.InputGroup}>
          <input
            className={inputStyle}
            onChange={inputChangeHandler}
            placeholder="From"
            ref={inputPriceStart}
            step="0.01"
            type="number"
          />
          <input
            className={inputStyle}
            onChange={inputChangeHandler}
            placeholder="To"
            ref={inputPriceEnd}
            step="0.01"
            type="number"
          />
        </div>
      </label>
      <label className={styles.Label}>
        Range
        <div className={styles.InputGroup}>
          <input
            className={inputStyle}
            onChange={inputChangeHandler}
            placeholder="From"
            ref={inputRangeStart}
            step="0.01"
            type="number"
          />
          <input
            className={inputStyle}
            onChange={inputChangeHandler}
            placeholder="To"
            ref={inputRangeEnd}
            step="0.01"
            type="number"
          />
        </div>
      </label>
      <label className={styles.Label}>
        Body Type
        <select className={styles.Select} ref={inputBodyType}>
          <option value="All">All</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </select>
      </label>
      <label className={styles.Label}>
        Manufacturer
        <select className={styles.Select} ref={inputManufacturer}>
          <option value="All">All</option>
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
        <button
          className={`${styles.Button} ${styles.ButtonLeft}`}
          onClick={resetForm}
        >
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
