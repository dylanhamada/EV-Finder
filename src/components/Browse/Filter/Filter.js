import React, { useEffect, useRef } from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const priceStartRef = useRef(null);
  const priceEndRef = useRef(null);
  const rangeStartRef = useRef(null);
  const rangeEndRef = useRef(null);
  const bodyTypeRef = useRef(null);
  const manufacturerRef = useRef(null);
  let inputStyle = `${styles.InputText}`;
  let inputErrorStyle = `${styles.InputText} ${styles.InputTextError}`;

  useEffect(() => {
    priceStartRef.current.value = props.filterState.priceStart;
    priceEndRef.current.value = props.filterState.priceEnd;
    rangeStartRef.current.value = props.filterState.rangeStart;
    rangeEndRef.current.value = props.filterState.rangeEnd;
    bodyTypeRef.current.value = props.filterState.bodyType;
    manufacturerRef.current.value = props.filterState.manufacturer;
  }, [props.filterState]);

  const inputChangeHandler = (event) => {
    event.target.className = inputStyle;
  };

  const validateForm = () => {
    const textInputs = [priceStartRef, priceEndRef, rangeStartRef, rangeEndRef];
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
            ref={priceStartRef}
            step="0.01"
            type="number"
          />
          <input
            className={inputStyle}
            name="priceEnd"
            onChange={inputChangeHandler}
            placeholder="To"
            ref={priceEndRef}
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
            name="rangeStart"
            onChange={inputChangeHandler}
            placeholder="From"
            ref={rangeStartRef}
            step="0.01"
            type="number"
          />
          <input
            className={inputStyle}
            name="rangeEnd"
            onChange={inputChangeHandler}
            placeholder="To"
            ref={rangeEndRef}
            step="0.01"
            type="number"
          />
        </div>
      </label>
      <label className={styles.Label}>
        Body Type
        <select
          className={styles.Select}
          name="bodyType"
          onChange={inputChangeHandler}
          ref={bodyTypeRef}
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
          ref={manufacturerRef}
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
