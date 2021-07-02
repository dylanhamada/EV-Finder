import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "../../hoc/Container/Container";
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
  const findState = useSelector((state) => state.find);
  const authState = useSelector((state) => state.auth.user);
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
    let complete = findState.questions.every((question) => {
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
    <Container>
      <Switch>
        <Route path={props.match.url + "/"} exact>
          <Intro click={getStartedHandler} />
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
            complete={state.questionnaireComplete}
            touched={state.questionnaireTouched}
            submit={submitQuestionnaireHandler}
          />
        </Route>
        <Route path="/find/result" exact>
          <Result
            click={getStartedHandler}
            result={findState.topVehicle}
            user={authState}
          />
        </Route>
      </Switch>
    </Container>
  );
};

export default Find;
