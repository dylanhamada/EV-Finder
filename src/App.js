import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const user = useSelector((state) => state.auth.user);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => console.log("Render App"));

  let home = <Landing />;

  if (user.name !== null) {
    home = (
      <React.Fragment>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/find" component={Find} />
        </Switch>
      </React.Fragment>
    );
  }

  return <div className={styles.App}>{home}</div>;
};

export default withRouter(App);
