let express = require("express");
let router = express.Router();

let questionArr = [
  {
    questionId: 1,
    question: "What is your name?",
    answer: "Dinesh",
    difficulty: 5,
    language: "English",
    multipleChoices: ['Dinesh','Ramesh','Danny','Suresh']
  },
  {
    questionId: 2,
    question: "How old are you?",
    answer: 25,
    difficulty: 2,
    language: "French",
    multipleChoices: [25,24,26,23]
  },
  {
    questionId: 3,
    question: "Where do you live?",
    answer: "NY",
    difficulty: 3,
    language: "German",
    multipleChoices: ['NY','TN','CHN','MNG']
  },
  {
    questionId: 4,
    question: "What are you doing?",
    answer: "Simply",
    difficulty: 1,
    language: "English",
    multipleChoices: ['Simply','Nothing','HardWork','Smartwork']
  },
];

router.get("/", (req, res) => {
  let filter = req.body;
  let response = questionArr.filter(
    (question) =>
      filter.value === "default" || filter.value == question[filter.type]
  );
  res.send(response);
});

router.post("/", (req, res) => {
  let question = req.body;
  if (
    questionArr.some((questions) => questions.question === question.question)
  ) {
    res.send("Question Already exists");
  } else {
    questionArr = [...questionArr, question];
    res.send("Added Successfully");
  }
});

router.put("/update", (req, res) => {
  let question = req.body;
  let objIndex = questionArr.findIndex(
    (questions) => questions.questionId == question.questionId
  );
  questionArr[objIndex] = question;
  res.send('Updated Successfully');
});

router.delete('/',(req,res)=>{
    let question = req.body;
    let objIndex = questionArr.findIndex(
      (questions) => questions.questionId == question.questionId
    );
    delete questionArr[objIndex] ;
    res.send(JSON.stringify(questionArr));
})

module.exports = router;
