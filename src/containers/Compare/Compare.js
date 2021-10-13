import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";
import One from "../../components/Compare/One/One";
import Two from "../../components/Compare/Two/Two";

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
          <One nav={navLinkHandler} num={dispatchVehicleNum} />
        </Route>
        <Route path="/compare/two" exact>
          <Two nav={navLinkHandler} num={dispatchVehicleNum} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
