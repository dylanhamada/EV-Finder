import React from "react";

import styles from "./Question.module.css";

const Question = (props) => {
  const options = props.options.map((option, index) => {
    const selected = index === props.selected ? styles.Selected : "";

    return (
      <span
        key={"option-" + (index + 1)}
        className={`${styles.Option} ${selected}`}
        onClick={props.click}
      >
        {option}
      </span>
    );
  });

  let questionStyle =
    props.error !== null && props.selected === null
      ? `${styles.Text} ${styles.Error}`
      : `${styles.Text}`;

  return (
    <div className={styles.Question}>
      <p className={questionStyle}>
        {props.number}. {props.question}
      </p>
      <div className={styles.Options}>{options}</div>
    </div>
  );
};

export default Question;
