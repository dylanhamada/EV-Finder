import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhVAKeeNSYXuQfgMbuaY7g7aSqEFTYxcw",
  authDomain: "ev-finder-3b5dd.firebaseapp.com",
  databaseURL: "https://ev-finder-3b5dd-default-rtdb.firebaseio.com",
  projectId: "ev-finder-3b5dd",
  storageBucket: "ev-finder-3b5dd.appspot.com",
  messagingSenderId: "1004964500597",
  appId: "1:1004964500597:web:2369be412fd30d322f943c",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
