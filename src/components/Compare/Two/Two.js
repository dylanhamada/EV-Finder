import React from "react";

import styles from "./Two.module.css";

import Selector from "../Selector/Selector";

const Two = (props) => {
  return (
    <div>
      <Selector which={2} vehicleNum={props.num} />
      <div className={styles.Links}>
        <span className={styles.Link} onClick={() => props.nav("one")}>
          Previous
        </span>
        <span className={styles.Link} onClick={() => props.nav()}>
          Compare
        </span>
      </div>
    </div>
  );
};

export default Two;
