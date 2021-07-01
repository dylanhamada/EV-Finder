import * as actionTypes from "./actionTypes";
import firebase from "firebase/app";

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
        console.log("Error getting document: ", error);
      });
  };
};

export const userFavorite = (vehicle) => {
  return {
    type: actionTypes.USER_FAVORITE,
    vehicle: vehicle,
  };
};

export const userAddFavorite = (user, vehicle) => {
  return (dispatch) => {
    const userRef = db.collection("users").doc(user);
    console.log(user.uid);

    userRef
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(vehicle),
      })
      .then(() => {
        dispatch(userFavorite(vehicle));
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
  };
};
