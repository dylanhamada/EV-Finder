import * as actionTypes from "../actions/actionTypes";
import compareState from "../state/compare";

const initialState = compareState;

const compareVehicleNum = (state, action) => {
  let newState = [...state];

  newState[0] = action.vehicleNum;

  return newState;
};

const compareVehicleInfo = (state, action) => {
  let newState = [...state];

  newState[0] === 1
    ? (newState[1] = action.vehicle)
    : (newState[2] = action.vehicle);

  return newState;
};

const compareClearVehicle = (state, action) => {
  let newState = [...state];

  newState[0] = action.vehicleNum;
  action.vehicleNum === 1 ? (newState[1] = null) : (newState[2] = null);

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPARE_VEHICLENUM:
      return compareVehicleNum(state, action);
    case actionTypes.COMPARE_VEHICLEINFO:
      return compareVehicleInfo(state, action);
    case actionTypes.COMPARE_CLEARVEHICLE:
      return compareClearVehicle(state, action);
    default:
      return state;
  }
};

export default reducer;
