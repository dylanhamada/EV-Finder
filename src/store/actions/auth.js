import * as actionTypes from "./actionTypes";

import {
  auth,
  googleProvider,
  twitterProvider,
  githubProvider,
} from "../../shared/fire";

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

export const authGithub = () => {
  auth.signInWithRedirect(githubProvider);

  return {
    type: actionTypes.AUTH_GITHUB,
  };
};

export const authResult = (result) => {
  return {
    type: actionTypes.AUTH_RESULT,
    result: result,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authRedirect = () => {
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
