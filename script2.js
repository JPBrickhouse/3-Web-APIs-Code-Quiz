var questionNumberEl = document.querySelector("#questionNumber");
var questionItselfEl = document.querySelector("#questionItself");

var answerButton0 = document.querySelector("#button0");
var answerButton1 = document.querySelector("#button1");
var answerButton2 = document.querySelector("#button2");
var answerButton3 = document.querySelector("#button3");

var startButton = document.querySelector("#startButton");

var answerChoice0 = document.querySelector("#choice0");
var answerChoice1 = document.querySelector("#choice1");
var answerChoice2 = document.querySelector("#choice2");
var answerChoice3 = document.querySelector("#choice3");

var answerChoiceArray = [answerChoice0, answerChoice1, answerChoice2, answerChoice3];

// --------------------------------------------------
var displayTime = document.querySelector("#time");
var timeRemaining = 100;

function countdown() {
    var timerCountdown = setInterval(function(){
        timeRemaining--;
        displayTime.textContent = timeRemaining;
        // If time reaches 0
        if (timeRemaining === 0) {
            clearInterval(timerCountdown);
        }
        // If the questions run out, stop the timer, log the timeRemaining
        // if statement
    },1000);
}
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


startButton.addEventListener("click",countdown);

startButton.addEventListener("click",runQuiz);


function checkAnswer(){
    var buttonSelected = this.id;
    console.log(buttonSelected);

    // Logging the correctChoice (aka, the correctAnswer from the questions object)
    var correctChoice = "button" + questions[currentQuestion].correctAnswer;

    if (buttonSelected === correctChoice) {
        console.log("Correct");
    }
    else if (buttonSelected != correctChoice) {
        console.log("Incorrect");
        // Subtracing 10 seconds of time from the if the answer was incorrect
        // Won't subtract lower than value of 0
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