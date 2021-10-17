import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";
import Select from "../../components/Compare/Select/Select";

import { compareVehicleNum } from "../../store/actions/compare";

const Compare = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const compareState = useSelector((state) => state.compare);

  const navLinkHandler = (page) => {
    history.push(`/compare/${page}`);
  };

  const dispatchVehicleNum = (num) => dispatch(compareVehicleNum(num));

  return (
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro nav={navLinkHandler} />
        </Route>
        <Route path="/compare/one" exact>
          <Select
            nav={navLinkHandler}
            vehicleNum={dispatchVehicleNum}
            num={1}
          />
        </Route>
        <Route path="/compare/two" exact>
          <Select
            nav={navLinkHandler}
            vehicleNum={dispatchVehicleNum}
            num={2}
          />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
