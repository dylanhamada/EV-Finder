import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Selector.module.css";

const Selector = (props) => {
  const history = useHistory();
  let which = props.which === 1 ? "One" : "Two";

  const compareLinkHandler = () => {
    history.push(`/browse`);
    props.vehicleNum(props.which);
  };

  return (
    <div className={styles.Selector} onClick={() => compareLinkHandler()}>
      <h3 className={styles.Title}>Vehicle {which}</h3>
    </div>
  );
};

export default Selector;
