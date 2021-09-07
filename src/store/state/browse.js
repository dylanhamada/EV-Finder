import vehicleInfo from "../../shared/vehicleInfo";

// const state = vehicleInfo.map((vehicle) => {
//   return vehicle.specs;
// });

const vehicles = vehicleInfo.map((vehicle) => vehicle.specs);

const state = {
  filter: {
    priceStart: "",
    priceEnd: "",
    rangeStart: "",
    rangeEnd: "",
    bodyType: "All",
    manufacturer: "All",
  },
  sort: {},
  vehicles: [...vehicles],
};

export default state;
