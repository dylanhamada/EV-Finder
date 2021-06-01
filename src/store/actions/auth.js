import * as actionTypes from "./actionTypes";

import { auth, googleProvider, twitterProvider } from "../../shared/fire";

export const authGoogle = () => {
  auth.signInWithRedirect(googleProvider);

  return {
    type: actionTypes.AUTH_GOOGLE,
  };
};

export const authTwitter = () => {
  auth.signInWithRedirect(twitterProvider);

  return {
    type: actionTypes.AUTH_TWITTER,
  };
};

export const authResult = (result) => {
  console.log(result);
  return {
    type: actionTypes.AUTH_RESULT,
    // result: result,
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
          dispatch(authResult(result));
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};
