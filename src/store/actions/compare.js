import * as actionTypes from "./actionTypes";

export const compareVehicleNum = (vehicleNum) => {
  return {
    type: actionTypes.COMPARE_VEHICLENUM,
    vehicleNum: vehicleNum,
  };
};

export const compareVehicleInfo = (vehicle) => {
  return {
    type: actionTypes.COMPARE_VEHICLEINFO,
    vehicle: vehicle,
  };
};
