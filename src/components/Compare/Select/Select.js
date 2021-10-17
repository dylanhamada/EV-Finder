import React from "react";

import styles from "./Select.module.css";

import Selector from "../Selector/Selector";

const Select = (props) => {
  let navNext = props.num === 1 ? "two" : "one";
  let linksStyles = props.num === 1 ? styles.LinksOne : styles.LinksTwo;
  let compareBtn =
    props.num === 1 ? null : (
      <span className={styles.Link} onClick={() => props.nav(navNext)}>
        Compare
      </span>
    );

  return (
    <div>
      <Selector which={props.num} vehicleNum={props.vehicleNum} />
      <div className={linksStyles}>
        <span className={styles.Link} onClick={() => props.nav(navNext)}>
          {props.num === 1 ? "Next" : "Previous"}
        </span>
        {compareBtn}
      </div>
    </div>
  );
};

export default Select;
