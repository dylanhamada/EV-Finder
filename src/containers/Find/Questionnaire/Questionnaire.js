import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Questionnaire.module.css';
import Question from '../../../components/Find/Question/Question';

import { scrollToTop } from '../../../shared/utility';
import { updateQuestions } from '../../../store/actions/find';

class Questionnaire extends Component {
    componentDidMount () {
        scrollToTop();
    }

    selectOptionHandler = (event, questionIdentifier) => {
        let updatedQuestion = {...this.props.questions[questionIdentifier]};
        updatedQuestion.selected = null;
        updatedQuestion.options.forEach((option, index) => {
            if (option === event.target.innerHTML) {
                updatedQuestion.selected = index;
            }
        });

        let updatedQuestions = [...this.props.questions];
        updatedQuestions[questionIdentifier] = updatedQuestion;
        
        this.props.onUpdateQuestions(updatedQuestions);
    }

    render () {
        const questions = this.props.questions.map((question, index) => (
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

const mapStateToProps = state => {
    return {
        questions: state.find.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateQuestions: (questions) => dispatch(updateQuestions(questions))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);