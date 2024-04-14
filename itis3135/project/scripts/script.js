const quizURL = 'components/questions.json';
const testURL = 'components/questions.json';

/* Functions for all pages */
function removeCSS() {
    var confirmed = window.confirm("Are you sure you want to remove the styling? This is useful if you are having compatability issues. Refresh the page to restore the styling.");
    if (!confirmed) {
        return;
    }

    var stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(function(stylesheet) {
        stylesheet.disabled = true;
    });
}

/* Functions for index.html page */

/* Functions for overview.html page */

/* Functions for syntax.html page */

/* Functions for basics.html page */

/* Functions for advanced.html page */

function validateInput() {
    var userInput = document.getElementById("userInput").value.trim();
    var expectedInput = 'print("Hello, World!")';
    var outputDiv = document.getElementById("first-code-output");
    var congratsDiv = document.getElementById("congrats-div");

    if (userInput === expectedInput) {
        outputDiv.textContent = "Hello, World!";
        outputDiv.style.display = "flex";
        congratsDiv.style.display = "block";
    } else {
        outputDiv.textContent = "SyntaxError: Please try again.";
        outputDiv.style.display = "flex";
        congratsDiv.style.display = "none";
    }
}

/* Functions for documentation.html page */

/* Functions for test.html page */

const questionsURL = 'components/questions.json';

async function fetchQuestions(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const questions = await response.json();
        return questions;
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

async function loadQuestions() {
    const questions = await fetchQuestions(questionsURL);
    return questions;
}

async function generateQuizQuestions() {
    const quizContainer = document.getElementById('quiz-questions');
    const questions = await loadQuestions();
    questions.quiz.forEach((questionObj, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.innerHTML = `<p>${index + 1}: ${questionObj.question}</p>`;
        
        questionObj.options.forEach((option, optionIndex) => {
            const answerLabel = document.createElement('label');
            answerLabel.innerHTML = `<input type="radio" name="quiz-question-${index}" value="${optionIndex}">${option}<br>`;
            questionContainer.appendChild(answerLabel);
        });

        quizContainer.appendChild(questionContainer);
    });

    document.getElementById('quiz-reset-btn').addEventListener('click', resetQuiz);
    document.getElementById('quiz-submit-btn').addEventListener('click', submitQuiz);
}

async function generateTestQuestions() {
    const testContainer = document.getElementById('test-questions');
    const questions = await loadQuestions();
    questions.test.forEach((questionObj, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.innerHTML = `<p>Test Question ${index + 1}: ${questionObj.question}</p>`;
        
        questionObj.options.forEach((option, optionIndex) => {
            const answerLabel = document.createElement('label');
            answerLabel.innerHTML = `<input type="radio" name="test-question-${index}" value="${optionIndex}">${option}<br>`;
            questionContainer.appendChild(answerLabel);
        });

        testContainer.appendChild(questionContainer);
    });
}

function submitQuiz() {
    const quizQuestions = document.querySelectorAll('#quiz-questions .question-container');
    let correctCount = 0;

    quizQuestions.forEach(question => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            const questionIndex = selectedAnswer.getAttribute('name').split('-')[1];
            const correctAnswerIndex = questions.quiz[questionIndex].answer;
            if (selectedAnswer.value === correctAnswerIndex) {
                correctCount++;
            }
        }
    });

    const resultSection = document.getElementById('quiz-result');
    resultSection.innerHTML = `<p>${correctCount} out of 10 questions were answered correctly.</p>`;
}


window.onload = function() {
    generateQuizQuestions();
    generateTestQuestions();
}



