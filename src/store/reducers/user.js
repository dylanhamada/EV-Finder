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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOAD:
      return userLoad(state, action);
    case actionTypes.USER_UNLOAD:
      return userUnload();
    case actionTypes.USER_FAVORITE:
      return userFavorite(state, action);
    default:
      return state;
  }
};

export default reducer;
