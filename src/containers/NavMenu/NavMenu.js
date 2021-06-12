import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./NavMenu.module.css";

import CloseButton from "../../components/UI/CloseButton/CloseButton";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import User from "../../components/User/User";

const NavMenu = (props) => {
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

  let menuClasses = [styles.NavMenu, styles.Close];
  if (state.menuOpen) {
    menuClasses = [styles.NavMenu, styles.Open];
  }

  return (
    <React.Fragment>
      <MenuToggle menuToggle={toggleHandler} />
      <nav className={menuClasses.join(" ")}>
        <CloseButton menuToggle={toggleHandler} />
        <User userName={userInfo.name} userPhoto={userInfo.photoURL} />
        <ul className={styles.NavList}>
          <Link className={styles.Link} to="/find">
            <li className={styles.NavListItem} onClick={linkClickHandler}>
              Find
            </li>
          </Link>
          <li className={styles.NavListItem}>Browse</li>
          <li className={styles.NavListItem}>Compare</li>
          <li className={styles.NavListItem}>Favorites</li>
          <li className={styles.NavListItem}>Log Out</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavMenu;
