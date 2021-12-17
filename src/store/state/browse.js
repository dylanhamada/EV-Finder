import vehicleInfo from "../../shared/vehicleInfo";

const vehicles = vehicleInfo.map((vehicle) => vehicle.specs);

const state = {
  filter: ["", "", "", "", "All", "All"],
  sort: ["Name", "Ascending"],
  vehicles: [...vehicles],
  currentVehicle: null,
};

export default state;
