import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import styles from "./Browse.module.css";
import Scrollable from "../../components/Browse/Scrollable/Scrollable";

const Browse = (props) => {
  const browseState = useSelector((state) => state.browse);

  return (
    <div className={styles.Browse}>
      <Switch>
        <Route path="/browse" exact>
          <Scrollable vehicles={browseState} />
        </Route>
      </Switch>
    </div>
  );
};

export default Browse;
