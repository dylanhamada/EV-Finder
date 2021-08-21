import * as actionTypes from "./actionTypes";

export const browseFilter = (filters) => {
  return {
    type: actionTypes.BROWSE_FILTER,
    filters: filters,
  };
};

export const browseSort = () => {
  return {
    type: actionTypes.BROWSE_SORT,
  };
};
