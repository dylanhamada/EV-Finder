import React from "react";

import styles from "./Selector.module.css";

const Selector = (props) => {
  let which = props.which === "one" ? "One" : "Two";

  return (
    <div className={styles.Selector}>
      <h3 className={styles.Title}>Vehicle {which}</h3>
    </div>
  );
};

export default Selector;
