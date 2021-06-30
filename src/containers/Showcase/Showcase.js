import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Showcase.module.css";
import { userAddFavorite } from "../../store/actions/user";

const Showcase = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  let favorite = null;
  let user = (
    <div className={styles.User}>
      <span>Your EV</span>
    </div>
  );
  let title = (
    <h3 className={styles.Title}>
      {props.vehicle.manufacturer} {props.vehicle.name}
    </h3>
  );

  if (props.user.name !== null) {
    const regex = /(\w*)/;
    const firstName = props.user.name.match(regex)[0];

    user = (
      <div className={styles.User}>
        <img alt="User" className={styles.Photo} src={props.user.photoURL} />
        <span>{firstName}'s EV</span>
      </div>
    );

    favorite = (
      <span
        className={styles.Favorite}
        onClick={() =>
          dispatch(userAddFavorite(authState.user.userId, props.vehicle.name))
        }
      >
        Favorite
      </span>
    );
  }

  if (props.result) {
    title = (
      <h3 className={styles.Title}>
        Meet the 2020 {props.vehicle.manufacturer} {props.vehicle.name}
      </h3>
    );
  }

  return (
    <div className={styles.Showcase}>
      {user}
      {title}
      <img
        className={styles.Image}
        src={props.vehicle.photo}
        alt={`${props.vehicle.manufacturer} ${props.vehicle.name}`}
      />
      <div className={styles.Buttons}>{favorite}</div>
    </div>
  );
};

export default Showcase;
