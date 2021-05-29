import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import Landing from "./containers/Landing/Landing";
import NavMenu from "./containers/NavMenu/NavMenu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Find from "./containers/Find/Find";

class App extends Component {
  render() {
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
  }
}

export default withRouter(App);
