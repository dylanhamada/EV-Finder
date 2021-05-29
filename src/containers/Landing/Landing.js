import React from "react";

import styles from "./Landing.module.css";

const Landing = (props) => {
  return (
    <div className={styles.Landing}>
      <h1>Find your EV. Today.</h1>
      <p>
        Explore the world of electric vehicles and find one that's right for you
        with EV Finder.
      </p>
      <p>Sign in with Google</p>
    </div>
  );
};

export default Landing;
