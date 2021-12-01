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
  let specComparison = null;
  let saveComparison = null;
  let result = (
    <React.Fragment>
      <p className={styles.Text}>
        Please start a new comparison to view two vehicles head-to-head.
      </p>
      <span className={styles.Link} onClick={() => props.nav("one", true)}>
        Click here for new comparison.
      </span>
    </React.Fragment>
  );

  if (
    props.userState.comparisons &&
    props.compareState[1] &&
    props.compareState[2]
  ) {
    const savedComparisons = [...props.userState.comparisons];
    const currentComparison = props.compareState;
    let saved = false;
    let savedIndex = null;

    savedComparisons.forEach((comparison, index) => {
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
        savedIndex = index;

        savedComparisons.splice(savedIndex, 1);
      }
    });

    if (saved) {
      saveComparison = (
        <div className={styles.LinksComparison}>
          <span
            className={styles.Link}
            onClick={() => props.removeComparison(savedComparisons)}
          >
            Remove Comparison
          </span>
        </div>
      );
    } else {
      saveComparison = (
        <div className={styles.LinksComparison}>
          <span className={styles.Link} onClick={() => props.addComparison()}>
            Save Comparison
          </span>
        </div>
      );
    }
  }

  if (props.compareState[1] && props.compareState[2]) {
    specComparison = order.map((spec) => {
      const currentVehicle = props.compareState[currentNum];
      const otherVehicle = props.compareState[otherNum];
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

    result = (
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
        {saveComparison}
      </React.Fragment>
    );
  }

  return result;
};

export default Result;
