import * as actionTypes from "../actions/actionTypes";
import compareState from "../state/compare";

const initialState = compareState;

const compareVehicleNum = (state, action) => {
  let newState = [...state];

  newState[0] = action.vehicleNum;

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPARE_VEHICLENUM:
      return compareVehicleNum(state, action);
    case actionTypes.COMPARE_VEHICLEONE:
      return state;
    case actionTypes.COMPARE_VEHICLETWO:
      return state;
    default:
      return state;
  }
};

export default reducer;
