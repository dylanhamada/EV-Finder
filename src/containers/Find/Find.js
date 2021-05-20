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
  resetState,
} from "../../store/actions/find";
import { scrollToTop } from "../../shared/utility";

const Find = (props) => {
  const reduxState = useSelector((state) => state.find);
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    questionnaireComplete: false,
    questionnaireError: null,
    questionnaireTouched: false,
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

  const getStartedHandler = () => {
    dispatch(resetState());

    setState({
      questionnaireComplete: false,
      questionnaireError: null,
      questionnaireTouched: false,
    });

    history.push("/find/criteria");
  };

  const submitQuestionnaireHandler = () => {
    let complete = reduxState.questions.every((question) => {
      return question.selected !== null;
    });

    setState((state) => ({
      ...state,
      questionnaireComplete: complete,
      questionnaireTouched: true,
    }));

    dispatchScore();
    scrollToTop();

    if (complete) {
      history.push("/find/result");
    }
  };

  return (
    <div className={styles.Find}>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro click={getStartedHandler} />
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
            complete={state.questionnaireComplete}
            touched={state.questionnaireTouched}
            submit={submitQuestionnaireHandler}
          />
        </Route>
        <Route path="/find/result" exact>
          <Result result={reduxState.topVehicle} />
        </Route>
      </Switch>
    </div>
  );
};

export default Find;
