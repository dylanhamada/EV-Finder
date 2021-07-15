import React from "react";
import { useParams, useHistory } from "react-router-dom";

import styles from "./Details.module.css";
import Showcase from "../../../containers/Showcase/Showcase";
import Blurb from "../../Info/Blurb/Blurb";
import Specs from "../../Info/Specs/Specs";
import Reviews from "../../Info/Reviews/Reviews";

import vehicleInfo from "../../../shared/vehicleInfo";

const Details = (props) => {
  let { vehiclePath } = useParams();
  let history = useHistory();
  const currentVehicle = vehicleInfo.find(
    (vehicle) => vehicle.specs.id === vehiclePath
  ).specs;

  return (
    <div className={styles.Details}>
      <Showcase vehicle={currentVehicle} />
      <Blurb text={currentVehicle.blurb} />
      <Specs specs={currentVehicle} />
      <Reviews reviews={currentVehicle.reviews} />
      <p className={styles.Back} onClick={() => history.goBack()}>
        Back
      </p>
    </div>
  );
};

export default Details;
