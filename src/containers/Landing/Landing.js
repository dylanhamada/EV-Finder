import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Landing.module.css";

import {
  auth,
  googleProvider,
  twitterProvider,
  githubProvider,
} from "../../shared/fire";
import { authLogout } from "../../store/actions/auth";
import { vehicleImageRandomizer } from "../../shared/utility";

import googleIcon from "../../assets/images/google-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import twitterIcon from "../../assets/images/twitter-icon.svg";

const Landing = (props) => {
  const dispatch = useDispatch();
  const randomVehicle = vehicleImageRandomizer();

  return (
    <div className={styles.Landing}>
      <img
        className={styles.VehicleImage}
        src={randomVehicle.photo}
        alt={randomVehicle.name}
      />
      <h1 className={styles.Title}>Find your EV. Today.</h1>
      <p className={styles.Blurb}>
        Explore the world of electric vehicles and find one that's right for you
        with EV Finder.
      </p>
      <div
        className={`${styles.Button} ${styles.GoogleButton}`}
        onClick={() => auth.signInWithRedirect(googleProvider)}
      >
        <img alt="Google Icon" height="20" src={googleIcon} />
        <span className={styles.ButtonText}>Sign in with Google</span>
      </div>
      <div
        className={`${styles.Button} ${styles.TwitterButton}`}
        onClick={() => auth.signInWithRedirect(twitterProvider)}
      >
        <img alt="Twitter Icon" height="20" src={twitterIcon} />
        <span className={styles.ButtonText}>Sign in with Twitter</span>
      </div>
      <div
        className={`${styles.Button} ${styles.GithubButton}`}
        onClick={() => auth.signInWithRedirect(githubProvider)}
      >
        <img alt="GitHub Icon" height="20" src={githubIcon} />
        <span className={styles.ButtonText}>Sign in with GitHub</span>
      </div>
      <p className={styles.Guest} onClick={() => dispatch(authLogout())}>
        Continue as Guest
      </p>
    </div>
  );
};

export default Landing;
