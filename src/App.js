import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import { auth } from "./shared/fire";
import { authLogin, authFinished } from "./store/actions/auth";
import { userInit } from "./store/actions/user";

import Landing from "./containers/Landing/Landing";
import NavMenu from "./containers/NavMenu/NavMenu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Find from "./containers/Find/Find";

const App = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authFinished());
        dispatch(authLogin(user));
        dispatch(userInit(user));
      } else {
        dispatch(authFinished());
      }
    });

    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let home = null;

  if (!authState.loading) {
    switch (authState.authenticated) {
      case true:
      case false:
        home = (
          <React.Fragment>
            <NavMenu />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/find" component={Find} />
            </Switch>
          </React.Fragment>
        );
        break;
      case null:
        home = <Landing />;
        break;
      default:
        home = null;
    }
  }

  return <div className={styles.App}>{home}</div>;
};

export default withRouter(App);
