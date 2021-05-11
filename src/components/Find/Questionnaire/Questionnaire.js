import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Questionnaire.module.css";
import Question from "./Question/Question";

import { scrollToTop } from "../../../shared/utility";

const Questionnaire = (props) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (props.questionnaireComplete) {
      props.history.push("/find/result");
    }
  }, [props.questionnaireComplete, props.history]);

  useEffect(() => {
    console.log("error useeffect");
    if (!props.complete) {
      scrollToTop();
      setError(
        <p className={styles.Error}>Please complete the questionnaire.</p>
      );
    }
  }, [props.complete]);

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
        <span className={styles.Link} onClick={props.submit}>
          Submit
        </span>
      </div>
    </React.Fragment>
  );
};

export default Questionnaire;
