import React from "react";
import { Route, Switch } from "react-router-dom";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";

const Compare = (props) => {
  return (
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
