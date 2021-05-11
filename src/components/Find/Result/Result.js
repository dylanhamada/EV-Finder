/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import state from "../../../store/reducers/state/find";

const Result = (props) => {
  // by default, component should render a spinner
  // this signifies that redux state is being updated
  // once updated, the vehicle info component should be rendered
  // this should be done somehow in useEffect
  useEffect(() => {
    props.dispatchScore();
  }, []);

  useEffect(() => {
    if (props.scores === state.scores) {
      console.log("unaltered state");
    } else {
      const result = props.scores.reduce((topVehicle, currentVehicle) => {
        if (currentVehicle.total > topVehicle.total) {
          return currentVehicle;
        }

        return topVehicle;
      });

      console.log(result);
    }
  }, [props.scores]);

  return <div></div>;
};

export default Result;
