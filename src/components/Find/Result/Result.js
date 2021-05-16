import React from "react";

import state from "../../../store/state/find";

const Result = (props) => {
  // by default, component should render a spinner
  // this signifies that redux state is being updated
  // once updated, the vehicle info component should be rendered
  // this should be done somehow in useEffect

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

  return <React.Fragment></React.Fragment>;
};

export default Result;
