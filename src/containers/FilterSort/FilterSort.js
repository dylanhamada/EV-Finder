import React, { useState } from "react";

import styles from "./FilterSort.module.css";
import CloseButton from "../../components/UI/CloseButton/CloseButton";

const FilterSort = (props) => {
  const [state, setState] = useState();
  let menuClasses = [styles.FilterSort, styles.Close];
  // let form = null;

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
