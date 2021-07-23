// Global Variables
const startButton = document.querySelector('#start-btn');
const welcomeContainer = document.querySelector('.welcome-container');
const questionContainer = document.querySelector('#question-container');
const highScoresContainer = document.querySelector('.highscores-container');
const questionDiv = document.querySelector('#question');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
const answer4Btn = document.querySelector('#answer4');
let shuffledQuestion
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
    },
    {
        question: 'Which sea creature has three hearts?',
        answers: [
            { text: 'Whale', correct: false },
            { text: 'Octopus', correct: true },
            { text: 'Dolphin', correct: false },
            { text: 'Shark', correct: false },
        ]
    },
    {
        question: 'What is the first letter of alphabet?',
        answers: [
            { text: 'M', correct: false },
            { text: 'C', correct: false },
            { text: 'A', correct: true },
            { text: 'B', correct: false },
        ]
    },
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
let currentQuestionIndex = 0;
let intervalId;
// Event Listeners
startButton.addEventListener('click', startGame);
answer1Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.querySelector('answers');
    console.log(isCorrect)
    if (isCorrect === "true") {
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    }
});
answer2Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    }
});
answer3Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    }
});
answer4Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
        currentScore = currentScore + 5
    } else {
        timeLeft = timeLeft - 5
    }
});
function startGame() {
    console.log('started')
    timeLeft = 60;
    currentScore = 0;
    currentQuestionIndex = 0;
    welcomeContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    startTimer();
    showNextQuestion();
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide')
}
function startTimer() {
    intervalId = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
        }
        else {
            timeLeft++;

        }
    }, 1000);

    let newScore = {
        initials: prompt('first name last name'),
        score: currentScore
    }
}

function showNextQuestion() {
    let currentQuestionObj;
    if (currentQuestionIndex === questions.length) {
        let scores = [
            {
                initials: 'LS',
                score: 50
            },
            {
                initials: 'DP',
                score: 60
            },
            {
                initials: 'MA',
                score: 40
            }
        ]
        scores = JSON.parse(localStorage.get('highScores'));
        scores.push(newScore)
    } else {
        currentQuestionObj = questions[currentQuestionIndex];
        questionDiv.innerText = currentQuestionObj.question;
        // Go through answers array to update answer text for each answer
        answer1Btn.innerText = currentQuestionObj.answers[0].text;  // 10
        answer2Btn.innerText = currentQuestionObj.answers[1].text;// 15
        answer3Btn.innerText = currentQuestionObj.answers[2].text; // 5
        answer4Btn.innerText = currentQuestionObj.answers[3].text; // 23
        // Update data-answer attribute with value from each answer
        // <button id="answer1" data-correct="true" class="btn">Answer 1</button>
        answer1Btn.dataset.correct = currentQuestionObj.answers[0].correct;
        answer2Btn.dataset.correct = currentQuestionObj.answers[1].correct;
        answer3Btn.dataset.correct = currentQuestionObj.answers[2].correct;
        answer4Btn.dataset.correct = currentQuestionObj.answers[3].correct;

        currentQuestionIndex++;
    }
}

