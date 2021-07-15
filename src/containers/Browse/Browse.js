import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import styles from "./Browse.module.css";
import Scrollable from "../../components/Browse/Scrollable/Scrollable";
import Details from "../../components/Browse/Details/Details";
import FilterSort from "../../components/Browse/FilterSort/FilterSort";

const Browse = (props) => {
  const browseState = useSelector((state) => state.browse);
  const [state, setState] = useState({
    menuOpen: false,
  });

  const menuOpenHandler = () => {
    setState(() => ({
      menuOpen: true,
    }));
  };

  const menuCloseHandler = () => {
    setState(() => ({
      menuOpen: false,
    }));
  };

  return (
    <div className={styles.Browse}>
      <Switch>
        <Route path="/browse" exact>
          <Scrollable vehicles={browseState} openFilterSort={menuOpenHandler} />
        </Route>
        <Route path={`/browse/:vehiclePath`}>
          <Details />
        </Route>
      </Switch>
      <FilterSort
        menuOpen={state.menuOpen}
        closeFilterSort={menuCloseHandler}
      />
    </div>
  );
};

export default Browse;
