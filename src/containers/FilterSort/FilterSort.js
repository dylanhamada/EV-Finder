import React, { useState, useRef } from "react";

import styles from "./FilterSort.module.css";
import CloseButton from "../../components/UI/CloseButton/CloseButton";

const FilterSort = (props) => {
  const [state, setState] = useState();
  let menuClasses = [styles.FilterSort, styles.Close];
  let form = null;

  if (props.menuOpen) {
    menuClasses = [styles.FilterSort, styles.Open];
  }

  switch (props.menuType) {
    case "filter":
      form = (
        <React.Fragment>
          <label className={styles.Label}>
            Price
            <div className={styles.InputGroup}>
              <input type="text" className={styles.Input} placeholder="From" />
              <input type="text" className={styles.Input} placeholder="To" />
            </div>
          </label>
          <label className={styles.Label}>
            Range
            <input type="text" />
            <input type="text" />
          </label>
          <label className={styles.Label}>
            Body Type
            <select>
              <option value="">Select One</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="Coupe">Coupe</option>
            </select>
          </label>
          <label className={styles.Label}>
            Manufacturer
            <select>
              <option value="">Select One</option>
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
        </React.Fragment>
      );
      break;
    case "sort":
      form = (
        <React.Fragment>
          <label className={styles.Label}>
            Sort by
            <select>
              <option value="">Select One</option>
              <option value="price">Price</option>
              <option value="range">Range</option>
              <option value="charging time">Charging Time</option>
              <option value="horsepower">Horsepower</option>
            </select>
          </label>
          <label className={styles.Label}>
            Order
            <select>
              <option value="">Select One</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </label>
        </React.Fragment>
      );
      break;
    default:
      form = null;
  }

  return (
    <div className={menuClasses.join(" ")}>
      <CloseButton menuToggle={() => props.closeFilterSort()} />
      {form}
    </div>
  );
};

export default FilterSort;
