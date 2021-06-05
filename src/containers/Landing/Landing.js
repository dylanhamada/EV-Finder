import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./Landing.module.css";

import {
  authGoogle,
  authTwitter,
  authGithub,
  authRedirect,
} from "../../store/actions/auth.js";
import { vehicleImageRandomizer } from "../../shared/utility";

import googleIcon from "../../assets/images/google-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import twitterIcon from "../../assets/images/twitter-icon.svg";

const Landing = (props) => {
  const dispatch = useDispatch();
  const randomVehicle = vehicleImageRandomizer();

  useEffect(() => {
    dispatch(authRedirect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        onClick={() => dispatch(authGoogle())}
      >
        <img alt="Google Icon" height="20" src={googleIcon} />
        <span className={styles.ButtonText}>Sign in with Google</span>
      </div>
      <div
        className={`${styles.Button} ${styles.TwitterButton}`}
        onClick={() => dispatch(authTwitter())}
      >
        <img alt="Twitter Icon" height="20" src={twitterIcon} />
        <span className={styles.ButtonText}>Sign in with Twitter</span>
      </div>
      <div
        className={`${styles.Button} ${styles.GithubButton}`}
        onClick={() => dispatch(authGithub())}
      >
        <img alt="GitHub Icon" height="20" src={githubIcon} />
        <span className={styles.ButtonText}>Sign in with GitHub</span>
      </div>
      <p className={styles.Guest}>Continue as Guest</p>
    </div>
  );
};

export default Landing;
