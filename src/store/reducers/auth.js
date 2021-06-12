import * as actionTypes from "../actions/actionTypes";
import authState from "../state/auth";
import { updateObject } from "../../shared/utility";

const initialState = authState;

const authLogin = (state, action) => {
  const newUser = {
    name: action.user.displayName,
    photoURL: action.user.photoURL,
    userId: action.user.uid,
  };

  return updateObject(state, {
    user: newUser,
    error: null,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, {
    user: {
      name: null,
      photoURL: null,
      userId: null,
    },
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
