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

var introContent = document.querySelector("#introContent");
var quizContent = document.querySelector("#quizContent");

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
        
        // 0 to n-1 corresponds to the possible indices of the questions object
        // Therefore, variable currentQuestion can only successfully exist from 0 to n-1
        // since it is sourcing the questions from the indices of the questions object
        // 
        // questions.Length equals n
        // 
        // As this Quiz executes, it will eventually try to set currentQuestion to n
        // (That corresponds to an index that does not exist in the questions object)
        // Therefore, when n > n-1, end the timer
        if (currentQuestion > (questions.length-1)) {
            clearInterval(timerCountdown);
        }

    },1000);
}
// --------------------------------------------------
// Creating a variable that is an object with questions and answers
var questions = [
    {
        questionNum: "1",
        questionContent: "Question 1?",
        answerChoices: {
            0: "Incorrect",
            1: "Correct",
            2: "Incorrect",
            3: "Incorrect"
        },
        correctAnswer: 1
    },
    {
        questionNum: "2",
        questionContent: "Question 2?",
        answerChoices: {
            0: "Incorrect",
            1: "Incorrect",
            2: "Correct",
            3: "Incorrect"
        },
        correctAnswer: 2
    },
    {
        questionNum: "3",
        questionContent: "Question 3?",
        answerChoices: {
            0: "Correct",
            1: "Incorrect",
            2: "Incorrect",
            3: "Incorrect"
        },
        correctAnswer: 0
    },
    {
        questionNum: "4",
        questionContent: "Question 4?",
        answerChoices: {
            0: "Incorrect",
            1: "Incorrect",
            2: "Incorrect",
            3: "Correct"
        },
        correctAnswer: 3
    },
    {
        questionNum: "5",
        questionContent: "Question 5?",
        answerChoices: {
            0: "Incorrect",
            1: "Correct",
            2: "Incorrect",
            3: "Incorrect"
        },
        correctAnswer: 1
    }
];
// --------------------------------------------------

// function startQuiz hides the quiz introduction
// and shows the quizContent
function startQuiz() {
    introContent.setAttribute("style","display:none")
    quizContent.setAttribute("style","display:flex")
}

// Initializing the current question as 0 because it
// corresponds to the index in the questions object
// where the first question is located
var currentQuestion = 0;

// Cycle through the questions in the questions object
function populateQuestion(){
    questionNumberEl.textContent = questions[currentQuestion].questionNum;
    questionItselfEl.textContent = questions[currentQuestion].questionContent;
    for (j=0; j<4; j++) {
        answerChoiceArray[j].textContent = questions[currentQuestion].answerChoices[j];
    }
}

// run the quiz
function runQuiz() {
    if (currentQuestion < questions.length) {
        // populate the question contents in their respective fields
        populateQuestion();
    }
}

// Writing a function called checkAnswer
// with the intention that an event is passed into the function
function checkAnswer(event){
    // Because the event has been passed in the function, we can call the event
    // and preventDefault() behavior
    // Therefore, it will wait for a button push before executing the function
    event.preventDefault();

    var buttonSelected = this.id;
    console.log(buttonSelected);

    // variable for the correctChoice (aka, the correctAnswer from the questions object)
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
    // increase the value of currentQuestion by 1
    currentQuestion++
    // run the quiz again
    runQuiz();
}

// running functions when the user clicks the start button
startButton.addEventListener("click",countdown);
startButton.addEventListener("click",startQuiz);
startButton.addEventListener("click",runQuiz);

// running functions when the user clicks any of the answer buttons
answerButton0.addEventListener("click",checkAnswer);
answerButton1.addEventListener("click",checkAnswer);
answerButton2.addEventListener("click",checkAnswer);
answerButton3.addEventListener("click",checkAnswer);