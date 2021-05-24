import React from "react";

import styles from "./Result.module.css";

import Showcase from "../../Info/Showcase/Showcase";
import Blurb from "../../Info/Blurb/Blurb";
import Specs from "../../Info/Specs/Specs";
import Reviews from "../../Info/Reviews/Reviews";

const Result = (props) => {
  let result = (
    <React.Fragment>
      <p className={styles.Text}>
        Please complete the questionnaire to get matched to an electric vehicle.
      </p>
      <span className={styles.Link} onClick={props.click}>
        Get started
      </span>
    </React.Fragment>
  );

  if (props.result !== null) {
    result = (
      <React.Fragment>
        <Showcase vehicle={props.result.specs} result />
        <Blurb text={props.result.specs.blurb} />
        <Specs specs={props.result.specs} />
        <Reviews reviews={props.result.specs.reviews} />
      </React.Fragment>
    );
  }

  return result;
};

export default Result;
