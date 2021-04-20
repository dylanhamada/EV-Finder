import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Questionnaire.module.css';
import Question from '../../../components/Find/Question/Question';

import { scrollToTop } from '../../../shared/utility';

class Questionnaire extends Component {
    state = {
        questions: [
            {
                question: 'What\'s your budget?',
                options: ['$0 - $40,000', '$40,000 - $60,000', '$60,000 - $80,000'],
                selected: null,
            },
            {
                question: 'What will this vehicle be used for?',
                options: ['Daily commute', 'Weekend trips', 'Joyrides'],
                selected: null,
            },
            {
                question: 'How far do you drive on a daily basis?',
                options: ['0 - 20 miles', '20 - 100 miles', '100+ miles'],
                selected: null,
            },
            {
                question: 'Who are you driving for?',
                options: ['Just me', 'Me and one passenger', 'A family of four or more'],
                selected: null,
            },
            {
                question: 'What body style do you prefer?',
                options: ['Sedan', 'Hatchback', 'SUV/Crossover'],
                selected: null,
            },
            {
                question: 'How important is cargo space?',
                options: ['Very', 'Not very'],
                selected: null,
            },
            {
                question: 'Which best describes your style?',
                options: ['Practical', 'Luxurious', 'Quirky', 'A mix of everything'],
                selected: null,
            },
        ]
    }

    componentDidMount () {
        scrollToTop();
    }

    selectOptionHandler = (event, questionIdentifier) => {
        let updatedQuestion = {...this.state.questions[questionIdentifier]};
        updatedQuestion.selected = null;
        updatedQuestion.options.forEach((option, index) => {
            if (option === event.target.innerHTML) {
                updatedQuestion.selected = index;
            }
        });

        let updatedQuestions = [...this.state.questions];
        updatedQuestions[questionIdentifier] = updatedQuestion;
        
        this.setState({
            questions: updatedQuestions
        });
    }

    render () {
        const questions = this.state.questions.map((question, index) => (
            <Question 
                key={'question-' + (index + 1)} 
                number={index + 1} 
                question={question.question} 
                options={question.options} 
                selected={question.selected}
                click={(event) => this.selectOptionHandler(event, index)} 
            />
        ));

        return (
            <React.Fragment>
                {questions}
                <div className={styles.Links}>
                    <Link to={'/find/criteria'} className={styles.Link}>Previous</Link>
                    <Link to={'/find/criteria'} className={styles.Link}>Submit</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Questionnaire;