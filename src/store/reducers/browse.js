import * as actionTypes from "../actions/actionTypes";
import browseState from "../state/browse";

const initialState = browseState;

const browseFilter = (action) => {
  let newState = [...initialState];
  if (action.filters[0] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.priceNum > action.filters[0]
    );
  }

  if (action.filters[1] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.priceNum < action.filters[1]
    );
  }

  if (action.filters[2] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.rangeNum > action.filters[2]
    );
  }

  if (action.filters[3] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.rangeNum < action.filters[3]
    );
  }

  if (action.filters[4] !== "All") {
    newState = newState.filter(
      (vehicle) => vehicle["body type"] === action.filters[4]
    );
  }

  if (action.filters[5] !== "All") {
    newState = newState.filter(
      (vehicle) => vehicle.manufacturer === action.filters[5]
    );
  }

  return newState;
};

const browseSort = (state, action) => {
  let newState = [...state];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BROWSE_FILTER:
      return browseFilter(action);
    case actionTypes.BROWSE_SORT:
      return browseSort(state, action);
    default:
      return state;
  }
};

export default reducer;
