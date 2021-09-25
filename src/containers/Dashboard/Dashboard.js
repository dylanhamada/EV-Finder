import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Dashboard.module.css";
import Container from "../../hoc/Container/Container";
import User from "../../components/User/User";

const Dashboard = (props) => {
  const userInfo = useSelector((state) => state.auth.user);

  let userProfile = null;

  if (userInfo.name !== null) {
    userProfile = (
      <User userName={userInfo.name} userPhoto={userInfo.photoURL} />
    );
  }

  return (
    <Container>
      {userProfile}
      <ul className={styles.NavList}>
        <Link className={styles.Link} to="/find">
          <li className={styles.NavListItem}>
            <h3 className={styles.NavListItemLink}>FIND</h3>
            <p className={styles.NavListItemDescription}>
              Complete a questionnaire and get matched to an electric vehicle.
            </p>
          </li>
        </Link>
        <Link className={styles.Link} to="/browse">
          <li className={styles.NavListItem}>
            <h3 className={styles.NavListItemLink}>Browse</h3>
            <p className={styles.NavListItemDescription}>
              Browse all of 2020's electric vehicles.
            </p>
          </li>
        </Link>
        <Link className={styles.Link} to="/compare">
          <li className={styles.NavListItem}>
            <h3 className={styles.NavListItemLink}>Compare</h3>
            <p className={styles.NavListItemDescription}>
              Compare two electric vehicles head to head.
            </p>
          </li>
        </Link>
        <li className={styles.NavListItem}>
          <h3 className={styles.NavListItemLink}>Favorites</h3>
          <p className={styles.NavListItemDescription}>
            View a list of your favorites.
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default Dashboard;
