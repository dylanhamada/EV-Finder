import * as actionTypes from './actionTypes';

export const updateCriteria = (result) => {
    return {
        type: actionTypes.UPDATE_CRITERIA,
        result: result
    };
};

export const updateQuestions = (event, questionIndex) => {
    return {
        type: actionTypes.UPDATE_QUESTIONS,
        event: event,
        questionIndex: questionIndex
    };
};