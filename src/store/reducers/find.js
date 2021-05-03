import * as actionTypes from "../actions/actionTypes";
import state from "./findState";
import { updateObject } from "../../shared/utility";
import { score } from "../../shared/score";

const initialState = state;

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
  score(state);

  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CRITERIA:
      return updateCriteria(state, action);
    case actionTypes.UPDATE_QUESTIONS:
      return updateQuestions(state, action);
    case actionTypes.UPDATE_SCORE:
      return updateScore(state);
    default:
      return state;
  }
};

export default reducer;
