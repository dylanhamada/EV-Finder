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
    menuType: null,
  });

  const menuOpenHandler = (type) => {
    setState(() => ({
      menuOpen: true,
      menuType: type,
    }));
  };

  const menuCloseHandler = () => {
    setState(() => ({
      menuOpen: false,
      menuType: null,
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
        menuType={state.menuType}
        closeFilterSort={menuCloseHandler}
      />
    </div>
  );
};

export default Browse;
