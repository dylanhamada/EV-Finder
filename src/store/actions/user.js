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
      comparisons: [],
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

export const userUnfavorite = (vehicle) => {
  return {
    type: actionTypes.USER_UNFAVORITE,
    vehicle: vehicle,
  };
};

export const userRemoveFavorite = (user, vehicle) => {
  return (dispatch) => {
    const userRef = db.collection("users").doc(user);

    userRef
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(vehicle),
      })
      .then(() => {
        dispatch(userUnfavorite(vehicle));
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
  };
};

export const userCompare = (comparison) => {
  return {
    type: actionTypes.USER_COMPARE,
    comparison: comparison,
  };
};

export const userAddComparison = (user, comparison) => {
  return (dispatch) => {
    const userRef = db.collection("users").doc(user);

    userRef
      .update({
        comparisons: firebase.firestore.FieldValue.arrayUnion(comparison),
      })
      .then(() => {
        dispatch(userCompare(comparison));
      })
      .catch((error) => {
        console.log("Error writing document: " + error);
      });
  };
};

export const userUncompare = (comparison) => {
  return {
    type: actionTypes.USER_UNCOMPARE,
    comparison: comparison,
  };
};

export const userRemoveComparison = (user, comparison) => {
  return (dispatch) => {
    const userRef = db.collection("users").doc(user);

    userRef
      .update({
        comparisons: comparison,
      })
      .then(() => {
        dispatch(userUncompare(comparison));
      })
      .catch((error) => {
        console.log("Error writing document: " + error);
      });
  };
};
