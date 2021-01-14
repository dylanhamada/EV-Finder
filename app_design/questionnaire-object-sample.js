// A mockup of how the various objects related to the questionnaire will be structured

const vehicles = {
    "nissan_leaf": {
        //... other properties, including vehicle specs
        "dragAndDrop": {
            "price": 10,
            "range": 8,
            "horsepower": 4
        },
        "questionnaire": {
            "questionOne": [0, 0, 10, 7],
            "questionTwo": [8, 0, 4, 0],
            "questionThree": [7, 6, 0, 0]
        }
    }
};

const questionnaire = {
    "result": {
        "dragAndDrop": ["price", "range", "horsepower", "cargo"],
        "questionnaire": [1, 2, 1, 3]
    },
    "scores": [
        {
            "name": "Nissan Leaf",
            "dragAndDrop": 10,
            "questionnaire": 5,
            "total": 7.5
        },
        {
            "name": "Tesla Model 3",
            "dragAndDrop": 9,
            "questionnaire": 2,
            "total": 5.5
        }
    ]
};