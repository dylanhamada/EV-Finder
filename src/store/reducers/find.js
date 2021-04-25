import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    criteria: ["Price", "Looks", "Range", "Charging Time", "Horsepower", "Seating", "Luxury", "Cargo Capacity"],
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
};

const updateCriteria = (state, action) => {
    let newCriteria = [...state.criteria];
    newCriteria.splice(action.result.source.index, 1);
    newCriteria.splice(action.result.destination.index, 0, action.result.draggableId);

    return updateObject(state, {criteria: newCriteria});
};

const updateQuestions = (state, action) => {
    let updatedQuestion = {...state.questions[action.questionIndex]};
    updatedQuestion.selected = null;
    updatedQuestion.options.forEach((option, index) => {
        if (option === action.event.target.innerHTML) {
            updatedQuestion.selected = index;
        }
    });

    let updatedQuestions = [...state.questions];
    updatedQuestions[action.questionIndex] = updatedQuestion;

    return updateObject(state, {questions: updatedQuestions});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CRITERIA: return updateCriteria(state, action);
        case actionTypes.UPDATE_QUESTIONS: return updateQuestions(state, action);
        default: return state;
    }
};

export default reducer;