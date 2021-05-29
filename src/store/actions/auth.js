import * as actionTypes from "./actionTypes";

import { auth } from "../../shared/fire";

export const authGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider);

  return {
    type: actionTypes.AUTH_GOOGLE,
  };
};

export const authGoogleResult = (result) => {
  return {
    type: actionTypes.AUTH_GOOGLE_RESULT,
    result: result,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const googleRedirectResult = () => {
  return (dispatch) => {
    auth
      .getRedirectResult()
      .then((result) => {
        if (result) {
          dispatch(authGoogleResult(result));
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};
