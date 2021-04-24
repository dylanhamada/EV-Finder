import * as actionTypes from './actionTypes';

export const updateCriteria = (criteria) => {
    return {
        type: actionTypes.UPDATE_CRITERIA,
        newCriteria: criteria
    };
};

export const updateQuestions = (questions) => {
    return {
        type: actionTypes.UPDATE_QUESTIONS,
        newQuestions: questions
    };
};