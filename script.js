// Global Variables
// const startButton = document.getElementById('start-btn');
const startButton = document.querySelector('#start-btn');
// const questionContainerElement = document.getElementById('question-container');
const welcomeContainer = document.querySelector('.welcome-container');
const questionContainer = document.querySelector('#question-container');
const highScoresContainer = document.querySelector('.highscores-container');
const questionDiv = document.querySelector('#question'); // <div id="question">Question</div>
const answer1Btn = document.querySelector('#answer1'); // <button id="answer1" class="btn">Answer 1</button>
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
const answer4Btn = document.querySelector('#answer4');
const tagName = prompt("Please enter an initial");
const shuffledQuestions, currentQuestionIndex;
const questions = [
    {
        question: 'What is 5 + 5',
        answers: [
            { text: '10', correct: true },
            { text: '15', correct: false },
            { text: '5', correct: false },
            { text: '23', correct: false },
        ]
    },
    {
        question: 'What is the capital of California?',
        answers: [
            { text: 'Los Angeles', correct: false },
            { text: 'San Diego', correct: false },
            { text: 'Sacramento', correct: true },
            { text: 'Davis', correct: false },
        ]
    }
    {
        question: 'Which sea creature has three hearts?',
        answers: [
            { text: 'Whale', correct: false },
            { text: 'Octopus', correct: true },
            { text: 'Dolphin', correct: false },
            { text: 'Shark', correct: false },
        ]
    }
    {
        question: 'What is the first letter of alphabet?',
        answers: [
            { text: 'M', correct: false },
            { text: 'C', correct: false },
            { text: 'A', correct: true },
            { text: 'B', correct: false },
        ]
    }
    {
        question: 'What is the Italian word for "pie"?',
        answers: [
            { text: 'spagati', correct: false },
            { text: 'bread', correct: false },
            { text: 'Mango', correct: false },
            { text: 'pizza', correct: true },
        ]
    }
];
let timeLeft = 60;
let currentScore = 0;
let currentQuestionIndex = 0; // refers to the index in the questions array
let intervalId;
// Event Listeners
startButton.addEventListener('click', startGame);
answer1Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct; // data-corect="true" or data-correct="false"
    if (isCorrect === "true") {
        // Update currentScore by 5 points
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    } //Deduct 5 seconds from timeLeft
});
answer2Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        // Update currentScore by 5 points
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    } // Deduct 5 seconds from timeLeft
});
answer3Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        // Update currentScore by 5 points
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    } // Deduct 5 seconds from timeLeft
});
answer4Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        // Update currentScore by 5 points
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    } // Deduct 5 seconds from timeLeft
});
function startGame() {
    // Requirements
    // Reset the timer back to 60 seconds
    timeLeft = 60;
    // Reset the current score back to 0
    currentScore = 0;
    // Reset the question index tracker back to 0
    currentQuestionIndex = 0;
    // Hide welcomeContainer
    welcomeContainer.classList.add('hidden');
    // Show questionContainer
    questionContainer.classList.remove('hidden');
    // Start the timer
    startTimer();
    // Show the next question
    showNextQuestion();
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
}
function startTimer() {
    // Call setInterval() to execute an action/function
    intervalId = setInterval(function () {
        // Inside action/function
        // First, check if timeleft greater than 0
        if (timeLeft > 0) {
            // If so, subtract 1 second from timeLeft 
            // timeLeft = timeLeft - 1; // 59
            // Or, use the shortcut: timeLeft -= 1;
            timeLeft--; // this means subtract 1 from timeLeft
        } else {
            timeLeft = timeleft++;
            // Else. time is up, prompt user to save initials  
            // saveInitials() // TODO: define this function
            

        }
    }, 1000);
}
// setInterval(function, amount of time to wait before it runs the function again)
// - returns an ID
// - You will use this ID with clearIntervalO(ID), so that it stops the execution 
//   of setInterval()
function showNextQuestion() {
    let currentQuestionObj;
    // Check if all the questions have been shown
    if (currentQuestionIndex === questions.length) {
        // If so, quiz is done, prompt user to save initials
        // saveInitials() // TODO: define this function
    } else {
        // Else, get the new question from questions array
        currentQuestionObj = questions[currentQuestionIndex];
        // Update questionDiv with the new question text
        questionDiv.innerText = currentQuestionObj.question;
        // Go through answers array to update answer text for each answer
        answer1Btn.innerText = currentQuestionObj.answers[0].text; // 10
        answer2Btn.innerText = currentQuestionObj.answers[1].text; // 15
        answer3Btn.innerText = currentQuestionObj.answers[2].text; // 5
        answer4Btn.innerText = currentQuestionObj.answers[3].text; // 23
        // Update data-answer attribute with value from each answer
        // <button id="answer1" data-correct="true" class="btn">Answer 1</button>
        answer1Btn.dataset.correct = currentQuestionObj.answers[0].correct;
        answer2Btn.dataset.correct = currentQuestionObj.answers[1].correct;
        answer3Btn.dataset.correct = currentQuestionObj.answers[2].correct;
        answer4Btn.dataset.correct = currentQuestionObj.answers[3].correct;
        // Update the currentQuestionIndex by 1
        currentQuestionIndex++; // currentQuestionIndex = currentQuestionIndex + 1;
    }
}