import React from "react";

import styles from "./One.module.css";

import Selector from "../Selector/Selector";

const One = (props) => {
  return (
    <div>
      <Selector which={1} vehicleNum={props.num} />
      <div className={styles.Links}>
        <span className={styles.Link} onClick={() => props.nav("two")}>
          Next
        </span>
      </div>
    </div>
  );
};

export default One;
