import * as actionTypes from "./actionTypes";

export const browseFilter = (filters) => {
  return {
    type: actionTypes.BROWSE_FILTER,
    filters: filters,
  };
};

export const browseSort = (order) => {
  return {
    type: actionTypes.BROWSE_SORT,
    order: order,
  };
};

export const browseCurrentVehicle = (vehicle) => {
  return {
    type: actionTypes.BROWSE_CURRENTVEHICLE,
    vehicle: vehicle,
  };
};
