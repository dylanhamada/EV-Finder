import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Showcase.module.css";
import { userAddFavorite, userRemoveFavorite } from "../../store/actions/user";
import { compareVehicleInfo } from "../../store/actions/compare";

import User from "../../components/Showcase/User/User";
import Title from "../../components/Showcase/Title/Title";
import Image from "../../components/Showcase/Image/Image";
import Button from "../../components/Showcase/Button/Button";

const Showcase = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const compareState = useSelector((state) => state.compare);

  let details = null;
  let compare = null;
  let favorite = null;
  let user = null;
  let title = <Title vehicle={props.vehicle} />;
  let compareNum = compareState[0] === 1 ? "one" : "two";

  const addFavorite = () => {
    dispatch(userAddFavorite(authState.user.userId, props.vehicle.name));
  };

  const removeFavorite = () => {
    dispatch(userRemoveFavorite(authState.user.userId, props.vehicle.name));
  };

  const compareVehicle = () => {
    let vehicle = {
      name: props.vehicle.name,
      manufacturer: props.vehicle.manufacturer,
      photo: props.vehicle.photo,
    };

    dispatch(compareVehicleInfo(vehicle));

    history.push(`/compare/${compareNum}`);
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

  if (props.compare) {
    compare = <Button buttonType="compare" click={compareVehicle} />;
  }

  if (
    authState.user.name !== null &&
    userState.favorites !== null &&
    !props.select
  ) {
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
        {compare}
        {favorite}
      </div>
    </div>
  );
};

export default Showcase;
