import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./NavMenu.module.css";
import { auth } from "../../shared/fire";
import { authLogout, authFinished, authReset } from "../../store/actions/auth";
import { userUnload } from "../../store/actions/user";

import CloseButton from "../../components/UI/CloseButton/CloseButton";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import User from "../../components/User/User";

const NavMenu = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const [state, setState] = useState({
    menuOpen: false,
  });

  const toggleHandler = () => {
    setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  const linkClickHandler = () => {
    setState({
      menuOpen: false,
    });
  };

  const signInHandler = () => {
    linkClickHandler();
    dispatch(authReset());
  };

  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        linkClickHandler();
        dispatch(authFinished());
        dispatch(authLogout());
        dispatch(userUnload());
      })
      .catch((error) => {
        console.log("error");
      });
  };

  let menuClasses = [styles.NavMenu, styles.Close];
  let userProfile = null;
  let authButton = null;

  if (state.menuOpen) {
    menuClasses = [styles.NavMenu, styles.Open];
  }

  if (userInfo.name !== null) {
    userProfile = (
      <User userName={userInfo.name} userPhoto={userInfo.photoURL} />
    );
    authButton = (
      <li className={styles.NavListItem} onClick={signOutHandler}>
        Sign Out
      </li>
    );
  } else {
    authButton = (
      <li className={styles.NavListItem} onClick={signInHandler}>
        Sign In
      </li>
    );
  }

  return (
    <React.Fragment>
      <MenuToggle menuToggle={toggleHandler} />
      <nav className={menuClasses.join(" ")}>
        <CloseButton menuToggle={toggleHandler} />
        {userProfile}
        <ul className={styles.NavList}>
          <Link className={styles.Link} to="/find">
            <li className={styles.NavListItem} onClick={linkClickHandler}>
              Find
            </li>
          </Link>
          <Link className={styles.Link} to="/browse">
            <li className={styles.NavListItem} onClick={linkClickHandler}>
              Browse
            </li>
          </Link>
          <li className={styles.NavListItem}>Compare</li>
          <li className={styles.NavListItem}>Favorites</li>
          {authButton}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavMenu;
