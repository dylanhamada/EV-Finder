import vehicleInfo from "../shared/vehicleInfo";

const criteriaScore = (vehicleCriteria, stateCriteria) => {
  let score = 0;

  stateCriteria.forEach((criterion, index) => {
    score += vehicleCriteria[criterion] * (8 - index);
  });

  return score / 360;
};

const questionnaireScore = (vehicleQuestions, stateQuestions) => {
  let score = 0;

  stateQuestions.forEach((question, index) => {
    score += vehicleQuestions[index][question.selected];
  });

  return score / 70;
};

export const totalScore = (state) => {
  const newScore = [...state.scores];

  vehicleInfo.forEach((vehicle, index) => {
    const vehicleScore = { ...state.scores[index] };

    vehicleScore.criteria = criteriaScore(
      vehicle.questionnaire.criteria,
      state.criteria
    );

    vehicleScore.questionnaire = questionnaireScore(
      vehicle.questionnaire.questions,
      state.questions
    );

    vehicleScore.total =
      (vehicleScore.criteria + vehicleScore.questionnaire) / 2;

    newScore[index] = vehicleScore;
  });

  return newScore;
};

export const topVehicle = (scores) => {
  const topScore = scores.reduce((topVehicle, currentVehicle) => {
    if (currentVehicle.total > topVehicle.total) {
      return currentVehicle;
    }

    return topVehicle;
  });

  const topVehicle = vehicleInfo.find((vehicle) => {
    return vehicle.specs.name === topScore.name;
  });

  return topVehicle;
};
