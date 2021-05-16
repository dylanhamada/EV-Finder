import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import styles from "./Questionnaire.module.css";
import Question from "./Question/Question";

import { scrollToTop } from "../../../shared/utility";

const Questionnaire = (props) => {
  let redirect = null;
  let error = null;

  useEffect(() => {
    scrollToTop();
  }, []);

  if (props.complete) {
    redirect = <Redirect to="/find/result" />;
  }

  if (!props.complete && props.touched) {
    error = <p className={styles.Error}>Please complete the questionnaire.</p>;
  }

  const questions = props.questions.map((question, index) => (
    <Question
      key={"question-" + (index + 1)}
      number={index + 1}
      question={question.question}
      options={question.options}
      selected={question.selected}
      error={error}
      click={(event) => props.dispatchQuestions(event, index)}
    />
  ));

  return (
    <React.Fragment>
      {redirect}
      {error}
      {questions}
      <div className={styles.Links}>
        <Link to={"/find/criteria"} className={styles.Link}>
          Previous
        </Link>
        <span className={styles.Link} onClick={props.submit}>
          Submit
        </span>
      </div>
    </React.Fragment>
  );
};

export default Questionnaire;
