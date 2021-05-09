import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Find.module.css";
import Intro from "../../components/Find/Intro/Intro";
import Criteria from "../../components/Find/Criteria/Criteria";
import Questionnaire from "../../components/Find/Questionnaire/Questionnaire";
import Result from "../../components/Find/Result/Result";

import {
  updateCriteria,
  updateQuestions,
  updateScore,
} from "../../store/actions/find";

const Find = (props) => {
  const findState = useSelector((state) => state.find);
  const dispatch = useDispatch();

  const dispatchCriteria = (result) => {
    dispatch(updateCriteria(result));
  };

  const dispatchQuestions = (event, questionIndex) => {
    event.persist();
    dispatch(updateQuestions(event, questionIndex));
  };

  const dispatchScore = () => {
    dispatch(updateScore());
  };

  return (
    <div className={styles.Find}>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro />
        </Route>
        <Route path="/find/criteria" exact>
          <Criteria
            criteria={findState.criteria}
            dispatchCriteria={dispatchCriteria}
          />
        </Route>
        <Route path="/find/questionnaire" exact>
          <Questionnaire
            questions={findState.questions}
            dispatchQuestions={dispatchQuestions}
          />
        </Route>
        <Route path="/find/result" exact>
          <Result scores={findState.scores} dispatchScore={dispatchScore} />
        </Route>
      </Switch>
    </div>
  );
};

export default Find;
