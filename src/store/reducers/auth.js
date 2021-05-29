import * as actionTypes from "../actions/actionTypes";
import authState from "../state/auth";
import { updateObject } from "../../shared/utility";

const initialState = authState;

const authGoogle = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authGoogleResult = (state, action) => {
  return updateObject(state, {
    result: action.result,
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
    case actionTypes.AUTH_GOOGLE:
      return authGoogle(state, action);
    case actionTypes.AUTH_GOOGLE_RESULT:
      return authGoogleResult(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
