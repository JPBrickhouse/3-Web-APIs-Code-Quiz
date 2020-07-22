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

// --------------------------------------------------
var displayTime = document.querySelector("#time");
var timeRemaining = 100;

function countdown() {
    var timerCountdown = setInterval(function(){
        timeRemaining--;
        displayTime.textContent = timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerCountdown);
        }
    },1000);
}
countdown();
// --------------------------------------------------
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
    },
    {
        questionNum: "3",
        questionContent: "Question 3?",
        answerChoices: {
            0: "Test 3a",
            1: "Test 3b",
            2: "Test 3c",
            3: "Test 3d"
        },
        correctAnswer: 0
    }
];
// --------------------------------------------------

var currentQuestion = 0;

function populateQuestion(){
    questionNumberEl.textContent = questions[currentQuestion].questionNum;
    questionItselfEl.textContent = questions[currentQuestion].questionContent;
    for (j=0; j<4; j++) {
        answerChoiceArray[j].textContent = questions[currentQuestion].answerChoices[j];
    }
}

function runQuiz() {
    if (currentQuestion < questions.length) {
        populateQuestion();
        checkAnswer();
    }
    
    
}

runQuiz();

function checkAnswer(){
    var buttonSelected = this.id;
    console.log(buttonSelected);
    if (buttonSelected === "button" + questions[currentQuestion].correctAnswer) {
        console.log("Correct");
    }
    else {
        console.log("Incorret");
        if(timeRemaining>0) {
            if(timeRemaining - 10 <= 0) {
                return;
            }
            else {
                timeRemaining -= 10;
            }
        }
    }
}

answerButton0.addEventListener("click",checkAnswer);
answerButton1.addEventListener("click",checkAnswer);
answerButton2.addEventListener("click",checkAnswer);
answerButton3.addEventListener("click",checkAnswer);