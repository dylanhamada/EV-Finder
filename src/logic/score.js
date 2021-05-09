import vehicleInfo from "../shared/vehicleInfo";

const criteriaScore = (vehicleCriteria, stateCriteria) => {
  let score = 0;
  // iterate over criteria object in state
  stateCriteria.forEach((criterion, index) => {
    // multiply (criterion score * criteria ranking)
    // add this score to a criteria score placeholder
    score += vehicleCriteria[criterion] * (8 - index);
  });
  // return score as a percentage
  return score / 360;
};

const questionnaireScore = (vehicleQuestions, stateQuestions) => {
  let score = 0;
  // iterate over questions object in state
  stateQuestions.forEach((question, index) => {
    // find the value of index in the vehicleQuestions.questions array
    // add that value to score
    score += vehicleQuestions[index][question.selected];
  });
  // divide score by 80 and return
  return score / 70;
};

const totalScore = (state) => {
  // clone the score array in state
  const newScore = [...state.scores];
  // iterate through vehicleInfo
  vehicleInfo.forEach((vehicle, index) => {
    const vehicleScore = { ...state.scores[index] };
    // for each vehicle, calculate criteria score
    // update the vehicle's criteria score in newScore
    vehicleScore.criteria = criteriaScore(
      vehicle.questionnaire.criteria,
      state.criteria
    );
    // for each vehicle, calculate questionnaire score
    vehicleScore.questionnaire = questionnaireScore(
      vehicle.questionnaire.questions,
      state.questions
    );
    // find the average of criteria and questionnaire scores and set total
    vehicleScore.total =
      (vehicleScore.criteria + vehicleScore.questionnaire) / 2;
    newScore[index] = vehicleScore;
  });

  return newScore;
};

export default totalScore;
