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
    return updateObject(state, {criteria: action.newCriteria});
};

const updateQuestions = (state, action) => {
    return updateObject(state, {questions: action.newQuestions});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CRITERIA: return updateCriteria(state, action);
        case actionTypes.UPDATE_QUESTIONS: return updateQuestions(state, action);
        default: return state;
    }
};

export default reducer;