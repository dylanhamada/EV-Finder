import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Showcase.module.css";
import { userAddFavorite, userRemoveFavorite } from "../../store/actions/user";

import User from "../../components/Showcase/User/User";
import Title from "../../components/Showcase/Title/Title";
import Image from "../../components/Showcase/Image/Image";
import Button from "../../components/Showcase/Button/Button";

const Showcase = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);

  let details = null;
  let favorite = null;
  let user = null;
  let title = <Title vehicle={props.vehicle} />;

  const addFavorite = () => {
    dispatch(userAddFavorite(authState.user.userId, props.vehicle.name));
  };

  const removeFavorite = () => {
    dispatch(userRemoveFavorite(authState.user.userId, props.vehicle.name));
  };

  if (props.result) {
    user = <User />;
    title = <Title vehicle={props.vehicle} result />;

    if (authState.user.name !== null) {
      user = <User user={authState.user} />;
    }
  }

  if (props.card) {
    details = <Button buttonType="details" vehicle={props.vehicle.id} />;
  }

  if (authState.user.name !== null && userState.favorites !== null) {
    const userFavorites = [...userState.favorites];

    favorite = <Button buttonType="favorite" click={addFavorite} />;

    if (userFavorites.includes(props.vehicle.name) === true) {
      favorite = <Button buttonType="unfavorite" click={removeFavorite} />;
    }
  }

  return (
    <div className={styles.Showcase}>
      {user}
      {title}
      <Image vehicle={props.vehicle} />
      <div className={styles.Buttons}>
        {details}
        {favorite}
      </div>
    </div>
  );
};

export default Showcase;
