import React, { useRef, useState } from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const [inputState, setInputState] = useState({
    priceStart: "",
    priceEnd: "",
    rangeStart: "",
    rangeEnd: "",
    bodyType: "All",
    manufacturer: "All",
  });
  let inputStyle = `${styles.InputText}`;
  let inputErrorStyle = `${styles.InputText} ${styles.InputTextError}`;

  const inputChangeHandler = (event) => {
    event.target.className = inputStyle;

    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const filterInput = { ...inputState };
    let valid = true;

    for (const input in filterInput) {
      if (input !== "bodyType" && input !== "manufacturer") {
        filterInput[input] = Number(filterInput[input]);
      }
    }

    console.log(filterInput);
  };

  const submitForm = (event) => {
    event.preventDefault();

    validateForm();

    // props.dispatchFilter(validatedInputs);

    // props.closeFilter();
  };

  // const resetForm = (event) => {
  //   event.preventDefault();

  //   inputPriceStart.current.value = "";
  //   inputPriceEnd.current.value = "";
  //   inputRangeStart.current.value = "";
  //   inputRangeEnd.current.value = "";
  //   inputBodyType.current.value = "All";
  //   inputManufacturer.current.value = "All";

  //   submitForm(event);
  // };

  return (
    <form onSubmit={submitForm}>
      <label className={styles.Label}>
        Price
        <div className={styles.InputGroup}>
          <input
            className={inputStyle}
            name="priceStart"
            onChange={inputChangeHandler}
            placeholder="From"
            step="0.01"
            type="number"
            value={inputState.priceStart}
          />
          <input
            className={inputStyle}
            name="priceEnd"
            onChange={inputChangeHandler}
            placeholder="To"
            step="0.01"
            type="number"
            value={inputState.priceEnd}
          />
        </div>
      </label>
      <label className={styles.Label}>
        Range
        <div className={styles.InputGroup}>
          <input
            className={inputStyle}
            name="rangeStart"
            onChange={inputChangeHandler}
            placeholder="From"
            step="0.01"
            type="number"
            value={inputState.rangeStart}
          />
          <input
            className={inputStyle}
            name="rangeEnd"
            onChange={inputChangeHandler}
            placeholder="To"
            step="0.01"
            type="number"
            value={inputState.rangeEnd}
          />
        </div>
      </label>
      <label className={styles.Label}>
        Body Type
        <select
          className={styles.Select}
          name="bodyType"
          onChange={inputChangeHandler}
          value={inputState.bodyType}
        >
          <option value="All">All</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
          <option value="Coupe">Coupe</option>
        </select>
      </label>
      <label className={styles.Label}>
        Manufacturer
        <select
          className={styles.Select}
          name="manufacturer"
          onChange={inputChangeHandler}
          value={inputState.manufacturer}
        >
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
