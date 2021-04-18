import React, { Component } from 'react';

import styles from './Questionnaire.module.css';
import Question from '../../../components/Find/Question/Question';

class Questionnaire extends Component {
    state = {
        questions: [
            {
                question: 'What\'s your budget?',
                options: [
                    {
                        option: '$0 - $40,000',
                        selected: false
                    }, 
                    {
                        option: '$40,000 - $60,000',
                        selected: false
                    }, 
                    {
                        option: '$60,000 - $80,000',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'What will this vehicle be used for?',
                options: [
                    {
                        option: 'Daily commute',
                        selected: false
                    }, 
                    {
                        option: 'Weekend trips',
                        selected: false
                    }, 
                    {
                        option: 'Joyrides',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'How far do you drive on a daily basis?',
                options: [
                    {
                        option: '0 - 20 miles',
                        selected: false
                    }, 
                    {
                        option: '20 - 100 miles',
                        selected: false
                    }, 
                    {
                        option: '100+ miles',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'Who are you driving for?',
                options: [
                    {
                        option: 'Just me',
                        selected: false
                    }, 
                    {
                        option: 'Me and one passenger',
                        selected: false
                    }, 
                    {
                        option: 'A family of four or more',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'What body style do you prefer?',
                options: [
                    {
                        option: 'Sedan',
                        selected: false
                    }, 
                    {
                        option: 'Hatchback',
                        selected: false
                    }, 
                    {
                        option: 'SUV/Crossover',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'How important is cargo space?',
                options: [
                    {
                        option: 'Very',
                        selected: false
                    }, 
                    {
                        option: 'Not very',
                        selected: false
                    }, 
                ],
            },
            {
                question: 'Which best describes your style?',
                options: [
                    {
                        option: 'Practical',
                        selected: false
                    }, 
                    {
                        option: 'Luxurious',
                        selected: false
                    }, 
                    {
                        option: 'Quirky',
                        selected: false
                    }, 
                    {
                        option: 'A mix of everything',
                        selected: false
                    }, 
                ],
            },
        ]
    }

    questionClickHandler = () => {

    }

    render () {
        const questions = this.state.questions.map((question, index) => (
            <Question key={'question-' + (index + 1)} number={index + 1} question={question.question} options={question.options} click={this.questionClickHandler} />
        ));

        return (
            <React.Fragment>
                {questions}
            </React.Fragment>
        );
    }
}

export default Questionnaire;