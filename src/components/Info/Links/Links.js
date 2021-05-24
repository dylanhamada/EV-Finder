import React from "react";

import styles from "./Links.module.css";

const Links = (props) => {
  return (
    <div className={styles.Links}>
      <p className={styles.Link}>Similar Vehicles</p>
      <p className={styles.Link} onClick={props.restart}>
        Restart Questionnaire
      </p>
    </div>
  );
};

export default Links;
