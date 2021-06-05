import vehicleInfo from "./vehicleInfo";

export function scrollToTop() {
  window.scrollTo(0, 0);
}

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const vehicleImageRandomizer = () => {
  const arrLength = vehicleInfo.length;
  const randomVehicle = Math.floor(Math.random() * arrLength);

  return vehicleInfo[randomVehicle].specs;
};
