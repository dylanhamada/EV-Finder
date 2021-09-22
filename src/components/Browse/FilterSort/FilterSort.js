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
          dispatchSort={props.dispatchSort}
          filterState={props.filterState}
          sortState={props.sortState}
        />
      );
      break;
    case "sort":
      form = (
        <Sort
          closeSort={props.closeFilterSort}
          dispatchFilter={props.dispatchFilter}
          dispatchSort={props.dispatchSort}
          filterState={props.filterState}
          sortState={props.sortState}
        />
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
