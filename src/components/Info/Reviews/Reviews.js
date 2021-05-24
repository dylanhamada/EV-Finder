import React from "react";

import styles from "./Reviews.module.css";

const Reviews = (props) => {
  const sites = Object.keys(props.reviews).sort();

  const links = sites.map((site) => {
    return (
      <a
        className={styles.Link}
        href={props.reviews[site]}
        rel="noreferrer"
        target="_blank"
      >
        {site} review
      </a>
    );
  });

  return <div className={styles.Reviews}>{links}</div>;
};

export default Reviews;
