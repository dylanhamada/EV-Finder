import * as actionTypes from "../actions/actionTypes";
import browseState from "../state/browse";
import {
  sortName,
  sortPrice,
  sortRange,
  sortChargeTime,
  sortHorsepower,
} from "../../logic/sort";

const initialState = { ...browseState };

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
      newState.vehicles = sortChargeTime(newState.vehicles, orderNum);
      break;
    case "Horsepower":
      newState.vehicles = sortHorsepower(newState.vehicles, orderNum);
      break;
    default:
      break;
  }

  return newState;
};

const browseCurrentVehicle = (state, action) => {
  let newState = { ...state };

  newState.currentVehicle = action.vehicle;

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BROWSE_FILTER:
      return browseFilter(action);
    case actionTypes.BROWSE_SORT:
      return browseSort(state, action);
    case actionTypes.BROWSE_CURRENTVEHICLE:
      return browseCurrentVehicle(state, action);
    default:
      return state;
  }
};

export default reducer;
