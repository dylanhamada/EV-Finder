import * as actionTypes from "./actionTypes";

export const updateCriteria = (result) => {
  return {
    type: actionTypes.UPDATE_CRITERIA,
    result: result,
  };
};

export const updateQuestions = (event, questionIndex) => {
  return {
    type: actionTypes.UPDATE_QUESTIONS,
    event: event,
    questionIndex: questionIndex,
  };
};

export const updateScore = () => {
  return {
    type: actionTypes.UPDATE_SCORE,
  };
};

export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE,
  };
};
