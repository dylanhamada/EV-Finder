import vehicleInfo from "./vehicleInfo";

const score = (state) => {
  let criteriaScore = 0;

  state.criteria.forEach((current, index) => {
    const value = 8 - index;

    criteriaScore += vehicleInfo[0].questionnaire.criteria[current] * value;
  });

  console.log(criteriaScore);

  return;
};

export default score;
