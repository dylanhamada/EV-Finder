import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";

import { auth } from "./shared/fire";
import { authLogin, authLogout } from "./store/actions/auth";

import styles from "./App.module.css";

import Landing from "./containers/Landing/Landing";
import NavMenu from "./containers/NavMenu/NavMenu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Find from "./containers/Find/Find";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authLogin(user));
      } else {
        dispatch(authLogout());
      }
    });

    return () => {
      unlisten();
    };
  });

  return (
    <div className={styles.App}>
      <Landing />
      {/* <NavMenu />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/find" component={Find} />
      </Switch> */}
    </div>
  );
};

export default withRouter(App);
