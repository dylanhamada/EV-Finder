import React from "react";
import { Link } from "react-router-dom";

import styles from "./Result.module.css";
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
  let saveButton = null;

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

  if (props.userState.comparisons) {
    const savedComparisons = props.userState.comparisons;
    const currentComparison = props.compareState;
    let saved = false;

    savedComparisons.forEach((comparison) => {
      let vehicleOneSaved = false;
      let vehicleTwoSaved = false;

      if (
        comparison[1].name === currentComparison[1].name ||
        comparison[1].name === currentComparison[2].name
      ) {
        vehicleOneSaved = true;
      }

      if (
        comparison[2].name === currentComparison[1].name ||
        comparison[2].name === currentComparison[2].name
      ) {
        vehicleTwoSaved = true;
      }

      if (vehicleOneSaved && vehicleTwoSaved) {
        saved = true;
      }
    });

    if (saved) {
      saveButton = <span className={styles.Link}>Remove Comparison</span>;
    } else {
      saveButton = (
        <span className={styles.Link} onClick={() => props.addComparison()}>
          Save Comparison
        </span>
      );
    }
  }

  return (
    <React.Fragment>
      <Showcase vehicle={props.compareState[props.num]} />
      <Specs
        specs={props.compareState[currentNum]}
        comparison={specComparison}
      />
      <div className={styles.Links}>
        <Link
          to={`/compare/result/${currentNum === 1 ? `two` : `one`}`}
          className={styles.Link}
        >
          {currentNum === 1 ? `Next` : `Previous`}
        </Link>
        <span className={styles.Link} onClick={() => props.nav("", true)}>
          Reset
        </span>
      </div>
      {saveButton}
    </React.Fragment>
  );
};

export default Result;
