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

export const authLogin = (user) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    user: user,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
