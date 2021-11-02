import React from "react";

import Showcase from "../../../containers/Showcase/Showcase";

const Result = (props) => {
  const order = [
    "priceNum",
    "rangeNum",
    null,
    null,
    "horsepowerNum",
    "chargingTimeNum",
    "battery",
    "fuel economy",
    "brakes",
    "cargo capacity",
    "dimensions",
    "weight",
  ];

  return (
    <React.Fragment>
      <Showcase vehicle={props.compareState[props.num]} />
    </React.Fragment>
  );
};

export default Result;
