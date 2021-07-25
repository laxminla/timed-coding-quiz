// Global Variables
const startButton = document.querySelector('#start-btn');
const viewHighScoresBtn = document.querySelector('#viewHighScoresBtn');
const closeBtn = document.querySelector('#close-btn');
const scoreContainer = document.querySelector('#score');
const timeLeftContainer = document.querySelector('#time');
const welcomeContainer = document.querySelector('.welcome-container');
const questionContainer = document.querySelector('#question-container');
const highScoresContainer = document.querySelector('#highscores-container');
const questionDiv = document.querySelector('#question');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
const answer4Btn = document.querySelector('#answer4');
let scores = [];
let timeLeft = 60;
let currentScore = 0;
let currentQuestionIndex = 0;
let intervalId;
let shuffledQuestion;
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
            { text: 'spaghetti', correct: false },
            { text: 'bread', correct: false },
            { text: 'Mango', correct: false },
            { text: 'pizza', correct: true },
        ]
    }
];

// Event Listeners
startButton.addEventListener('click', startGame);
viewHighScoresBtn.addEventListener('click', viewHighScores);
closeBtn.addEventListener('click', closeHighScores);
answer1Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    console.log(isCorrect);
    if (isCorrect === "true") {
        currentScore = currentScore + 5;
        scoreContainer.innerText = currentScore;
    } else {
        timeLeft = timeLeft - 5;
        timeLeftContainer.innerText = timeLeft;
    }
    showNextQuestion();
});

answer2Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    console.log(isCorrect);
    if (isCorrect === "true") {
        currentScore = currentScore + 5;
        scoreContainer.innerText = currentScore;
    } else {
        timeLeft = timeLeft - 5;
        timeLeftContainer.innerText = timeLeft;
    }
    showNextQuestion();
});

answer3Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    console.log(isCorrect);
    if (isCorrect === "true") {
        currentScore = currentScore + 5;
        scoreContainer.innerText = currentScore;
    } else {
        timeLeft = timeLeft - 5;
        timeLeftContainer.innerText = timeLeft;
    }
    showNextQuestion();
});

answer4Btn.addEventListener('click', function (event) {
    let isCorrect = event.target.dataset.correct;
    console.log(isCorrect);
    if (isCorrect === "true") {
        currentScore = currentScore + 5;
        scoreContainer.innerText = currentScore;
    } else {
        timeLeft = timeLeft - 5;
        timeLeftContainer.innerText = timeLeft;
    }
    showNextQuestion();
});

function viewHighScores() {
    let scoresList = document.querySelector('.scores-list');
    let li;
    welcomeContainer.classList.add('hidden');
    questionContainer.classList.add('hidden');
    scoresList.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
        li = document.createElement('li');
        li.innerText = scores[i].initials + ' - ' + scores[i].score;
        scoresList.append(li);
    }
    highScoresContainer.classList.remove('hidden');
};

function closeHighScores() {
    highScoresContainer.classList.add('hidden');
    if ((timeLeft > 0) || (currentQuestionIndex !== 0)) {
        questionContainer.classList.remove('hidden');
    } else {
        welcomeContainer.classList.remove('hidden');
    }
}

function promptForInitials() {
    currentQuestionIndex = 0;
    // hide quiz container
    questionContainer.classList.add("hidden");
    welcomeContainer.classList.remove("hidden");
    let initials = prompt("Please enter your initials");
    // create newscore object
    let newScore = {
        initials: initials,
        score: currentScore
    };

    // add new score object to scores array
    scores.push(newScore);

    // save scores array to local storage
    // scores = JSON.parse(localStorage.getItem('highScores'));
    localStorage.setItem("highScore", JSON.stringify(scores));

}

function startGame() {
    console.log('started');
    scores = JSON.parse(localStorage.getItem('highScores')) || [];
    timeLeft = 60;
    currentScore = 0;
    currentQuestionIndex = 0;
    scoreContainer.innerText = currentScore;
    timeLeftContainer.innerText = timeLeft;
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
            clearInterval(intervalId);
            // prompt the user for initial
            promptForInitials();

        }
        timeLeftContainer.innerText = timeLeft;
    }, 1000);

}

function showNextQuestion() {
    let currentQuestionObj;
    console.log(questions.length);
    if (currentQuestionIndex === questions.length - 1) {
        clearInterval(intervalId);
        // prompt the user for initial
        promptForInitials();
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

