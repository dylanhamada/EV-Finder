/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const Result = (props) => {
  useEffect(() => {
    props.dispatchScore();

    const result = props.scores.reduce((topVehicle, currentVehicle) => {
      if (currentVehicle.total > topVehicle.total) {
        return currentVehicle;
      }

      return topVehicle;
    });

    console.log(result);
  }, []);

  return <div></div>;
};

export default Result;
