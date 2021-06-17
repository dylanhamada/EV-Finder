import * as actionTypes from "./actionTypes";

export const authFinished = () => {
  return {
    type: actionTypes.AUTH_FINISHED,
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

export const authReset = () => {
  return {
    type: actionTypes.AUTH_RESET,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
