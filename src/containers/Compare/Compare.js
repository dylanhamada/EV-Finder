import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";
import One from "../../components/Compare/One/One";

const Compare = (props) => {
  const history = useHistory();

  const newComparisonHandler = () => {
    history.push("/compare/one");
  };

  return (
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro click={newComparisonHandler} />
        </Route>
        <Route path="/compare/one" exact>
          <One />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
