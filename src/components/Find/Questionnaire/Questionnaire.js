import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./Questionnaire.module.css";
import Question from "./Question/Question";

import { scrollToTop } from "../../../shared/utility";

const Questionnaire = (props) => {
  const history = useHistory();
  const [isComplete, setComplete] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (isComplete) {
      history.push("/find/result");
    }
  }, [isComplete, history]);

  const submitHandler = () => {
    let complete = true;

    props.questions.forEach((question) => {
      question.selected !== null && complete
        ? (complete = true)
        : (complete = false);
    });

    setComplete(complete);

    if (!complete) {
      scrollToTop();
      setError(
        <p className={styles.Error}>Please complete the questionnaire.</p>
      );
    }
  };

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
      {error}
      {questions}
      <div className={styles.Links}>
        <Link to={"/find/criteria"} className={styles.Link}>
          Previous
        </Link>
        <span className={styles.Link} onClick={submitHandler}>
          Submit
        </span>
      </div>
    </React.Fragment>
  );
};

export default Questionnaire;
