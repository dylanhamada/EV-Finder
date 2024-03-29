import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";
import Select from "../../components/Compare/Select/Select";
import Result from "../../components/Compare/Result/Result";

import {
  compareVehicleNum,
  compareClearVehicle,
  compareBothVehicles,
} from "../../store/actions/compare";
import {
  userAddComparison,
  userRemoveComparison,
} from "../../store/actions/user.js";

const Compare = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const compareState = useSelector((state) => state.compare);
  const userState = useSelector((state) => state.user);

  const navLinkHandler = (page, intro) => {
    if (intro) {
      dispatch(compareClearVehicle(2));
      dispatch(compareClearVehicle(1));
    }

    history.push(`/compare/${page}`);
  };

  const vehicleNum = (num) => dispatch(compareVehicleNum(num));

  const addComparison = () => {
    const newComparison = {
      1: { ...compareState[1] },
      2: { ...compareState[2] },
    };

    dispatch(userAddComparison(authState.user.userId, newComparison));
  };

  const removeComparison = (comparison) => {
    dispatch(userRemoveComparison(authState.user.userId, comparison));
  };

  const loadSavedComparison = (vehicleOne, vehicleTwo) => {
    dispatch(compareBothVehicles(vehicleOne, vehicleTwo));
    history.push(`/compare/result/one`);
  };

  return (
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro
            nav={navLinkHandler}
            savedComparisons={userState.comparisons}
            loadSavedComparison={loadSavedComparison}
          />
        </Route>
        <Route path="/compare/one" exact>
          <Select
            nav={navLinkHandler}
            vehicleNum={vehicleNum}
            num={1}
            vehicleInfo={compareState[1]}
          />
        </Route>
        <Route path="/compare/two" exact>
          <Select
            nav={navLinkHandler}
            vehicleNum={vehicleNum}
            num={2}
            vehicleInfo={compareState[2]}
          />
        </Route>
        <Route path="/compare/result/one" exact>
          <Result
            num={1}
            nav={navLinkHandler}
            compareState={compareState}
            nav={navLinkHandler}
            addComparison={addComparison}
            removeComparison={removeComparison}
            userState={userState}
          />
        </Route>
        <Route path="/compare/result/two" exact>
          <Result
            num={2}
            nav={navLinkHandler}
            compareState={compareState}
            nav={navLinkHandler}
            addComparison={addComparison}
            removeComparison={removeComparison}
            userState={userState}
          />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
