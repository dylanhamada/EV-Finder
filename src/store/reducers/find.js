import * as actionTypes from "../actions/actionTypes";
import findState from "../state/find";
import totalScore from "../../logic/score";
import { updateObject } from "../../shared/utility";

const initialState = findState;

const updateCriteria = (state, action) => {
  let newCriteria = [...state.criteria];
  newCriteria.splice(action.result.source.index, 1);
  newCriteria.splice(
    action.result.destination.index,
    0,
    action.result.draggableId
  );

  return updateObject(state, { criteria: newCriteria });
};

const updateQuestions = (state, action) => {
  let updatedQuestion = { ...state.questions[action.questionIndex] };
  updatedQuestion.selected = null;
  updatedQuestion.options.forEach((option, index) => {
    if (option === action.event.target.innerHTML) {
      updatedQuestion.selected = index;
    }
  });

  let updatedQuestions = [...state.questions];
  updatedQuestions[action.questionIndex] = updatedQuestion;

  return updateObject(state, { questions: updatedQuestions });
};

const updateScore = (state) => {
  let newScore = totalScore(state);

  return updateObject(state, { scores: newScore });
};

const resetState = (state) => {
  return updateObject(state, findState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CRITERIA:
      return updateCriteria(state, action);
    case actionTypes.UPDATE_QUESTIONS:
      return updateQuestions(state, action);
    case actionTypes.UPDATE_SCORE:
      return updateScore(state);
    case actionTypes.RESET_STATE:
      return resetState(state);
    default:
      return state;
  }
};

export default reducer;
