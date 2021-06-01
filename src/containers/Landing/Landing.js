import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Landing.module.css";

import {
  authGoogle,
  authTwitter,
  authGithub,
  authRedirect,
} from "../../store/actions/auth.js";

const Landing = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRedirect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Landing}>
      <h1>Find your EV. Today.</h1>
      <p>
        Explore the world of electric vehicles and find one that's right for you
        with EV Finder.
      </p>
      <p onClick={() => dispatch(authGoogle())}>Sign in with Google</p>
      <p onClick={() => dispatch(authTwitter())}>Sign in with Twitter</p>
      <p onClick={() => dispatch(authGithub())}>Sign in with GitHub</p>
    </div>
  );
};

export default Landing;
