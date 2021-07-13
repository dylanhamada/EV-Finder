import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./Details.module.css";
import Showcase from "../../../containers/Showcase/Showcase";
import Blurb from "../../Info/Blurb/Blurb";
import Specs from "../../Info/Specs/Specs";
import Reviews from "../../Info/Reviews/Reviews";

import vehicleInfo from "../../../shared/vehicleInfo";

const Details = (props) => {
  let { vehiclePath } = useParams();
  const currentVehicle = vehicleInfo.find(
    (vehicle) => vehicle.specs.id === vehiclePath
  ).specs;

  return (
    <div className={styles.Details}>
      <Showcase vehicle={currentVehicle} />
      <Blurb text={currentVehicle.blurb} />
      <Specs specs={currentVehicle} />
      <Reviews reviews={currentVehicle.reviews} />
      <Link to="/browse" className={styles.Link}>
        <p className={styles.Back}>Back</p>
      </Link>
    </div>
  );
};

export default Details;
