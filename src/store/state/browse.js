import vehicleInfo from "../../shared/vehicleInfo";

const vehicles = vehicleInfo.map((vehicle) => vehicle.specs);

const state = {
  filter: ["", "", "", "", "All", "All"],
  sort: {},
  vehicles: [...vehicles],
};

export default state;
