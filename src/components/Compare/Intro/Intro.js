import React from "react";

import styles from "./Intro.module.css";

const Intro = (props) => {
  return (
    <React.Fragment>
      <p className={styles.Text}>
        Compare two vehicles side by side, with color-coded stats. Save your
        comparisons for future reference.
      </p>
      <span className={styles.Link}>New Comparison</span>
    </React.Fragment>
  );
};

export default Intro;
