import React from "react";

import Showcase from "../../../containers/Showcase/Showcase";
import Specs from "../../Info/Specs/Specs";

const Result = (props) => {
  const order = [
    ["priceNum", "less"],
    ["rangeNum", "greater"],
    null,
    null,
    ["horsepowerNum", "greater"],
    ["chargingTimeNum", "less"],
    ["batteryNum", "greater"],
    ["fuelEconomyNum", "greater"],
    null,
    ["cargoNum", "greater"],
    null,
    null,
  ];
  const currentNum = props.num;
  const otherNum = props.num === 1 ? 2 : 1;
  const currentVehicle = props.compareState[currentNum];
  const otherVehicle = props.compareState[otherNum];

  const specComparison = order.map((spec) => {
    let specValue = null;

    if (spec) {
      const specName = spec[0];
      const specConditional = spec[1];

      if (specConditional === "less") {
        specValue = currentVehicle[specName] < otherVehicle[specName];
      }
      if (specConditional === "greater") {
        specValue = currentVehicle[specName] > otherVehicle[specName];
      }
    }

    return specValue;
  });

  return (
    <React.Fragment>
      <Showcase vehicle={props.compareState[props.num]} />
      <Specs
        specs={props.compareState[props.compareState[0]]}
        comparison={specComparison}
      />
    </React.Fragment>
  );
};

export default Result;
