import React from "react";

import styles from "./Select.module.css";

import Selector from "../Selector/Selector";
import Showcase from "../../../containers/Showcase/Showcase";

const Select = (props) => {
  let navNext = props.num === 1 ? "two" : "one";
  let linksStyles = props.num === 1 ? styles.LinksOne : styles.LinksTwo;

  let selector = <Selector which={props.num} vehicleNum={props.vehicleNum} />;

  let compareBtn =
    props.num === 1 ? null : (
      <span className={styles.Link} onClick={() => props.nav(navNext)}>
        Compare
      </span>
    );

  if (props.vehicleInfo) {
    selector = <Showcase vehicle={props.vehicleInfo} select />;
  }

  return (
    <div>
      {selector}
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
