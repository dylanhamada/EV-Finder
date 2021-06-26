import * as actionTypes from "./actionTypes";

import { db } from "../../shared/fire";

export const userLoad = (user) => {
  return {
    type: actionTypes.USER_LOAD,
    user: user,
  };
};

export const userUnload = () => {
  return {
    type: actionTypes.USER_UNLOAD,
  };
};

export const userInit = (user) => {
  return (dispatch) => {
    const initialState = {
      favorites: [],
    };
    const userRef = db.collection("users").doc(user.uid);

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(userLoad(doc.data()));
        } else {
          userRef
            .set(initialState)
            .then(() => dispatch(userLoad(initialState)));
        }
      })
      .catch((error) => {
        console.log("Error getting document");
      });
  };
};
