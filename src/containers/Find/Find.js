import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
  const reduxState = useSelector((state) => state.find);
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    questionnaireComplete: true,
    questionnaireError: null,
  });

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

  const submitQuestionnaireHandler = () => {
    let complete = true;

    reduxState.questions.forEach((question) => {
      question.selected !== null && state.questionnaireComplete
        ? (complete = true)
        : (complete = false);
    });

    setState((state) => ({ ...state, questionnaireComplete: complete }));
  };

  return (
    <div className={styles.Find}>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro />
        </Route>
        <Route path="/find/criteria" exact>
          <Criteria
            criteria={reduxState.criteria}
            dispatchCriteria={dispatchCriteria}
          />
        </Route>
        <Route path="/find/questionnaire" exact>
          <Questionnaire
            questions={reduxState.questions}
            dispatchQuestions={dispatchQuestions}
            history={history}
            complete={state.questionnaireComplete}
            submit={submitQuestionnaireHandler}
          />
        </Route>
        <Route path="/find/result" exact>
          <Result scores={reduxState.scores} dispatchScore={dispatchScore} />
        </Route>
      </Switch>
    </div>
  );
};

export default Find;
