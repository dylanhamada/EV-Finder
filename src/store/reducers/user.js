import * as actionTypes from "../actions/actionTypes";
import userState from "../state/user";
import { updateObject } from "../../shared/utility";

const initialState = userState;

const userLoad = (state, action) => {
  return updateObject(state, action.user);
};

const userUnload = (state) => {
  return initialState;
};

const userFavorite = (state, action) => {
  const currentFavorites = [...state.favorites];

  if (currentFavorites.includes(action.vehicle) === false) {
    const newFavorites = {
      favorites: [...state.favorites, action.vehicle],
    };

    return updateObject(state, newFavorites);
  }

  return state;
};

const userUnfavorite = (state, action) => {
  const currentFavorites = [...state.favorites];

  if (currentFavorites.includes(action.vehicle) === true) {
    const ind = currentFavorites.indexOf(action.vehicle);
    currentFavorites.splice(ind, 1);

    return updateObject(state, { favorites: currentFavorites });
  }

  return state;
};

const userCompare = (state, action) => {
  const newComparisons = [...state.comparisons];

  newComparisons.push(action.comparison);

  updateObject(state, newComparisons);
};

const userUncompare = (state, action) => {
  const newComparisons = [...state.comparisons];
  const ind = newComparisons.indexOf(action.comparison);

  newComparisons.splice(ind, 1);

  return updateObject(state, newComparisons);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD:
      return userLoad(state, action);
    case actionTypes.USER_UNLOAD:
      return userUnload();
    case actionTypes.USER_FAVORITE:
      return userFavorite(state, action);
    case actionTypes.USER_UNFAVORITE:
      return userUnfavorite(state, action);
    case actionTypes.USER_COMPARE:
      return userCompare(state, action);
    case actionTypes.USER_UNCOMPARE:
      return userUncompare(state, action);
    default:
      return state;
  }
};

export default reducer;
