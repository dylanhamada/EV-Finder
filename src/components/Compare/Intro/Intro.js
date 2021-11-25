import React from "react";

import styles from "./Intro.module.css";

const Intro = (props) => {
  // [x] create new div for comparisons
  // [x] copy styling from find questionnaire
  // [x] map user comparisons array
  // [x] create button for each array element
  // // [x] pull vehicle names and render in button
  // // button click dispatches an action to compare both vehicles
  // // button click redirects to results/one
  let savedComparisons = null;

  if (props.userState.comparisons.length > 0) {
    let comparisons = props.userState.comparisons.map((comparison, index) => {
      return (
        <div className={styles.SavedComparison} key={index}>
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
