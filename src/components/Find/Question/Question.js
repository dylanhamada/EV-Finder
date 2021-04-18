import React from 'react';

import styles from './Question.module.css';

const Question = props => {
    const questions = props.options.map((option, index) => {
        return (
            <p key={'option-' + (index + 1)}>{option.option}</p>
        );
    });

    return (
        <div className={styles.Question}>
            <p className={styles.Text}>{props.number}. {props.question}</p>
            {questions}
        </div>
    );
}

export default Question;