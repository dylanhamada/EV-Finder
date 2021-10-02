import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Container from "../../hoc/Container/Container";
import Intro from "../../components/Compare/Intro/Intro";
import One from "../../components/Compare/One/One";
import Two from "../../components/Compare/Two/Two";

const Compare = (props) => {
  const history = useHistory();

  const navLinkHandler = (page) => {
    history.push(`/compare/${page}`);
  };

  return (
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro click={navLinkHandler} />
        </Route>
        <Route path="/compare/one" exact>
          <One click={navLinkHandler} />
        </Route>
        <Route path="/compare/two" exact>
          <Two click={navLinkHandler} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Compare;
