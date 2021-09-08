import React from "react";

import styles from "./FilterSort.module.css";
import CloseButton from "../../UI/CloseButton/CloseButton";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const FilterSort = (props) => {
  let menuClasses = [styles.FilterSort, styles.Close];
  let form = null;

  if (props.menuOpen) {
    menuClasses = [styles.FilterSort, styles.Open];
  }

  switch (props.menuType) {
    case "filter":
      form = (
        <Filter
          closeFilter={props.closeFilterSort}
          dispatchFilter={props.dispatchFilter}
          filterState={props.filterState}
        />
      );
      break;
    case "sort":
      form = <Sort />;
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
