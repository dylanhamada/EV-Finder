import React from "react";

import styles from "./Intro.module.css";

const Intro = (props) => {
  return (
    <React.Fragment>
      <p className={styles.Text}>
        Answer a few simple questions and get matched to an electric vehicle
        that meets your needs. The whole process should take less than five
        minutes.
      </p>
      <span className={styles.Link} onClick={props.click}>
        Get started
      </span>
    </React.Fragment>
  );
};

export default Intro;
