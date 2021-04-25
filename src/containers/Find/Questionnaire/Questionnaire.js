import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Questionnaire.module.css';
import Question from '../../../components/Find/Question/Question';

import { scrollToTop } from '../../../shared/utility';
import { updateQuestions } from '../../../store/actions/find';

class Questionnaire extends Component {
    state = {
        incomplete: false
    }

    componentDidMount () {
        scrollToTop();
    }

    submitHandler () {
        this.props.questions.forEach(question => {
            this.setState({ incomplete: false });

            if (question.selected === null) {
                console.log("Incomplete");
                this.setState({ incomplete: true });
            }
        });

        scrollToTop();
    }

    selectOptionHandler = (event, questionIndex) => {
        event.persist();
        this.props.onUpdateQuestions(event, questionIndex);
    }

    render () {
        let error = this.state.incomplete ? <p className={styles.Error}>Please complete the questionnaire.</p> : null;

        const questions = this.props.questions.map((question, index) => (
            <Question 
                key={'question-' + (index + 1)} 
                number={index + 1} 
                question={question.question} 
                options={question.options} 
                selected={question.selected}
                incomplete = {this.state.incomplete}
                click={(event) => this.selectOptionHandler(event, index)} 
            />
        ));

        return (
            <React.Fragment>
                {error}
                {questions}
                <div className={styles.Links}>
                    <Link to={'/find/criteria'} className={styles.Link}>Previous</Link>
                    <span className={styles.Link} onClick={() => this.submitHandler()}>Submit</span>
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
        onUpdateQuestions: (event, questionIndex) => dispatch(updateQuestions(event, questionIndex))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);