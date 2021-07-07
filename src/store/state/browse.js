import vehicleInfo from "../../shared/vehicleInfo";

const state = vehicleInfo.map((vehicle) => {
  return vehicle.specs;
});

export default state;
