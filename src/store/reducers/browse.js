import * as actionTypes from "../actions/actionTypes";
import browseState from "../state/browse";

const initialState = browseState;

const browseFilter = (state, action) => {
  // create a copy of state
  let newState = [...state];
  // if price min is 0, leave initial state as is
  // otherwise, filter state by min price
  if (action.filters[0] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.priceNum > action.filters[0]
    );
  }
  // if price max is 0, leave initial state as is
  // otherwise, filter state by max price
  if (action.filters[1] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.priceNum < action.filters[1]
    );
  }
  // if range min is 0, leave initial state as is
  // otherwise, filter state by min range
  if (action.filters[2] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.rangeNum > action.filters[2]
    );
  }
  // if range max is 0, leave initial state as is
  // otherwise, filter state by max range
  if (action.filters[3] !== 0) {
    newState = newState.filter(
      (vehicle) => vehicle.rangeNum < action.filters[3]
    );
  }
  // if body type is 'any,' leave initial state as is
  // otherwise, filter state by body type
  // if manufacturer is 'any,' leave initial state as is
  // otherwise, filter state by manufacturer
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BROWSE_FILTER:
      return browseFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
