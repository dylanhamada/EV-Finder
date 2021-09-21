import * as actionTypes from "../actions/actionTypes";
import browseState from "../state/browse";
import { sortName, sortPrice, sortRange } from "../../logic/sort";

const browseFilter = (action) => {
  let newState = { ...browseState };

  newState.filter = action.filters;

  if (action.filters[0] !== 0) {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle.priceNum > action.filters[0]
    );
  }

  if (action.filters[1] !== 0) {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle.priceNum < action.filters[1]
    );
  }

  if (action.filters[2] !== 0) {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle.rangeNum > action.filters[2]
    );
  }

  if (action.filters[3] !== 0) {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle.rangeNum < action.filters[3]
    );
  }

  if (action.filters[4] !== "All") {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle["body type"] === action.filters[4]
    );
  }

  if (action.filters[5] !== "All") {
    newState.vehicles = newState.vehicles.filter(
      (vehicle) => vehicle.manufacturer === action.filters[5]
    );
  }

  return newState;
};

const browseSort = (state, action) => {
  const orderNum = action.order[1] === "Ascending" ? 1 : -1;
  let newState = { ...state };

  newState.sort = action.order;

  switch (action.order[0]) {
    case "Name":
      newState.vehicles = sortName(newState.vehicles, orderNum);
      break;
    case "Price":
      newState.vehicles = sortPrice(newState.vehicles, orderNum);
      break;
    case "Range":
      newState.vehicles = sortRange(newState.vehicles, orderNum);
      break;
    case "Charging Time":
      console.log(action.order);
      break;
    case "Horsepower":
      console.log(action.order);
      break;
    default:
      console.log(action.order);
  }

  return newState;
};

const reducer = (state = browseState, action) => {
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
