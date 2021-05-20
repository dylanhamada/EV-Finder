const state = {
  criteria: [
    "Price",
    "Looks",
    "Range",
    "Charging Time",
    "Horsepower",
    "Seating",
    "Luxury",
    "Cargo Capacity",
  ],
  questions: [
    {
      question: "What's your budget?",
      options: ["$0 - $40,000", "$40,000 - $60,000", "$60,000 - $80,000"],
      selected: null,
    },
    {
      question: "What will this vehicle be used for?",
      options: ["Daily commute", "Weekend trips", "Joyrides"],
      selected: null,
    },
    {
      question: "How far do you drive on a daily basis?",
      options: ["0 - 20 miles", "20 - 100 miles", "100+ miles"],
      selected: null,
    },
    {
      question: "Who are you driving for?",
      options: ["Just me", "Me and one passenger", "A family of four or more"],
      selected: null,
    },
    {
      question: "What body style do you prefer?",
      options: ["Sedan", "Hatchback", "SUV/Crossover"],
      selected: null,
    },
    {
      question: "How important is cargo space?",
      options: ["Very", "Not very"],
      selected: null,
    },
    {
      question: "Which best describes your style?",
      options: ["Practical", "Luxurious", "Quirky", "A mix of everything"],
      selected: null,
    },
  ],
  scores: [
    {
      name: "E-Tron",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "i3",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Bolt",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Ioniq",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Kona",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "I-Pace",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Niro",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Leaf",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Leaf Plus",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Taycan",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Model 3",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Model S",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Model X",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "Model Y",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
    {
      name: "E-Golf",
      criteria: 0,
      questionnaire: 0,
      total: 0,
    },
  ],
  topVehicle: null,
};

export default state;
