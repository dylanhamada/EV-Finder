import React from "react";

import styles from "./Intro.module.css";

const Intro = (props) => {
  console.log(props.savedComparisons);
  let savedComparisons = null;

  if (props.savedComparisons) {
    let comparisons = props.savedComparisons.map((comparison, index) => {
      return (
        <div
          className={styles.SavedComparison}
          key={index}
          onClick={() =>
            props.loadSavedComparison(comparison[1], comparison[2])
          }
        >
          <p>
            {comparison[1].manufacturer} {comparison[1].name} vs{" "}
            {comparison[2].manufacturer} {comparison[2].name}
          </p>
        </div>
      );
    });

    savedComparisons = (
      <div className={styles.SavedComparisons}>{comparisons}</div>
    );
  }

  return (
    <React.Fragment>
      <p className={styles.Text}>
        Compare two vehicles side by side, with color-coded stats. Save your
        comparisons for future reference. Saved comparisons will appear here.
      </p>
      <span className={styles.Link} onClick={() => props.nav("one", true)}>
        New Comparison
      </span>
      {savedComparisons}
    </React.Fragment>
  );
};

export default Intro;
