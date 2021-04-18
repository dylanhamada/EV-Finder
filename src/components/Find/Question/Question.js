import React from 'react';

import styles from './Question.module.css';

const Question = props => {
    const questions = props.options.map((option, index) => {
        return (
            <span key={'option-' + (index + 1)} className={styles.Option} onClick={props.click}>{option}</span>
        );
    });

    return (
        <div className={styles.Question}>
            <p className={styles.Text}>{props.number}. {props.question}</p>
            <div className={styles.Options}>
                {questions}
            </div>
        </div>
    );
}

export default Question;