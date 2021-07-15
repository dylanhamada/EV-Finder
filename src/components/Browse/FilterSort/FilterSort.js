import React from "react";

import styles from "./FilterSort.module.css";
import CloseButton from "../../UI/CloseButton/CloseButton";

const FilterSort = (props) => {
  let menuClasses = [styles.FilterSort, styles.Close];

  if (props.menuOpen) {
    menuClasses = [styles.FilterSort, styles.Open];
  }

  return (
    <div className={menuClasses.join(" ")}>
      <CloseButton menuToggle={() => props.closeFilterSort()} />
    </div>
  );
};

export default FilterSort;
