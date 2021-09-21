import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import styles from "./Browse.module.css";
import Scrollable from "../../components/Browse/Scrollable/Scrollable";
import Details from "../../components/Browse/Details/Details";
import FilterSort from "../../components/Browse/FilterSort/FilterSort";

import { browseFilter, browseSort } from "../../store/actions/browse";

const Browse = (props) => {
  const dispatch = useDispatch();
  const browseState = useSelector((state) => state.browse);
  const [state, setState] = useState({
    menuOpen: false,
    menuType: null,
  });

  const dispatchFilter = (filters) => {
    dispatch(browseFilter(filters));
  };

  const dispatchSort = (order) => {
    dispatch(browseSort(order));
  };

  const menuOpenHandler = (type) => {
    setState(() => ({
      menuOpen: true,
      menuType: type,
    }));
  };

  const menuCloseHandler = () => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: false,
    }));
  };

  return (
    <div className={styles.Browse}>
      <Switch>
        <Route path="/browse" exact>
          <Scrollable
            vehicles={browseState.vehicles}
            openFilterSort={menuOpenHandler}
          />
        </Route>
        <Route path={`/browse/:vehiclePath`}>
          <Details />
        </Route>
      </Switch>
      <FilterSort
        menuOpen={state.menuOpen}
        menuType={state.menuType}
        closeFilterSort={menuCloseHandler}
        dispatchFilter={dispatchFilter}
        dispatchSort={dispatchSort}
        filterState={browseState.filter}
        sortState={browseState.sort}
      />
    </div>
  );
};

export default Browse;
