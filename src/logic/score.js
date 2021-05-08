import vehicleInfo from "../shared/vehicleInfo";

const criteriaScore = (vehicleCriteria, stateCriteria) => {
  const criteriaRank = [...stateCriteria];
  let score = 0;
  // iterate over criteria object in state
  criteriaRank.forEach((criterion, index) => {
    // multiply (criterion score * criteria ranking)
    // add this score to a criteria score placeholder
    score += vehicleCriteria[criterion] * (8 - index);
  });
  // return score as a percentage
  return score / 360;
};

const questionnaireScore = () => {};

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
    vehicleScore.questionnaire = questionnaireScore();
    newScore[index] = vehicleScore;
  });
  // for each vehicle, calculate total score
};

export default totalScore;
