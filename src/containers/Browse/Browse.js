import React from "react";

import styles from "./Browse.module.css";
import Scrollable from "../../components/Browse/Scrollable/Scrollable";

const Browse = (props) => {
  return (
    <div className={styles.Browse}>
      <Scrollable />
    </div>
  );
};

export default Browse;
