export const sortName = (vehicles, order) => {
  vehicles.sort((vehicleA, vehicleB) => {
    if (vehicleA.manufacturer < vehicleB.manufacturer) {
      return order * -1;
    }
    if (vehicleA.manufacturer > vehicleB.manufacturer) {
      return order * 1;
    }
    return 0;
  });

  return vehicles;
};

export const sortPrice = (vehicles, order) => {
  vehicles.sort((vehicleA, vehicleB) => {
    return order * (vehicleA.priceNum - vehicleB.priceNum);
  });

  return vehicles;
};

export const sortRange = (vehicles, order) => {
  vehicles.sort((vehicleA, vehicleB) => {
    return order * (vehicleA.rangeNum - vehicleB.rangeNum);
  });

  return vehicles;
};
