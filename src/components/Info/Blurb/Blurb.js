import React from "react";

import styles from "./Blurb.module.css";

const Blurb = (props) => {
  return <p className={styles.Blurb}>{props.text}</p>;
};

export default Blurb;
