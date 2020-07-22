var questionNumberEl = document.querySelector("#questionNumber");
var questionItselfEl = document.querySelector("#questionItself");

var answerButton0 = document.querySelector("#button0");
var answerButton1 = document.querySelector("#button1");
var answerButton2 = document.querySelector("#button2");
var answerButton3 = document.querySelector("#button3");

var answerChoice0 = document.querySelector("#choice0");
var answerChoice1 = document.querySelector("#choice1");
var answerChoice2 = document.querySelector("#choice2");
var answerChoice3 = document.querySelector("#choice3");

var answerChoiceArray = [answerChoice0, answerChoice1, answerChoice2, answerChoice3];

var currentScoreEl = document.querySelector("#currentScore");

// Creating a variable that is an object with questions and answers
var questions = [
    {
        questionNum: "1",
        questionContent: "Question 1?",
        answerChoices: {
            0: "Test 1a",
            1: "Test 1b",
            2: "Test 1c",
            3: "Test 1d"
        },
        correctAnswer: 1
    },
    {
        questionNum: "2",
        questionContent: "Question 2?",
        answerChoices: {
            0: "Test 2a",
            1: "Test 2b",
            2: "Test 2c",
            3: "Test 2d"
        },
        correctAnswer: 2
    }
];


// Function to displaying the quiz questions and answers
function populateQuiz(){
    for (i=0; i<questions.length; i++) {
        questionNumberEl.textContent = questions[i].questionNum;
        questionItselfEl.textContent = questions[i].questionContent;
        for (j=0; j<4; j++) {
            answerChoiceArray[j].textContent = questions[i].answerChoices[j];
        }
    }
}

// Calling that function to displaying the quiz questions and answers
populateQuiz();