const quizURL = 'components/questions.json';
const testURL = 'components/questions.json';

/* Functions for all pages */
document.addEventListener('DOMContentLoaded', loadMenu);
document.addEventListener('DOMContentLoaded', loadFooter);

function loadMenu() {
    fetch('components/header.json')
        .then(response => response.json())
        .then(data => {
            const menuLinks = document.getElementById('menu-links');
            data.links.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.textContent = link.text;
                listItem.appendChild(anchor);
                menuLinks.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading menu:', error));
}

function removeCSS() {
    var confirmed = window.confirm("Are you sure you want to remove the styling? This is useful if you are having compatibility issues. Refresh the page to restore the styling.");
    if (!confirmed) {
        return;
    }

    var stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(function(stylesheet) {
        stylesheet.disabled = true;
    });
}

function loadFooter() {
    fetch('components/footer.json')
        .then(response => response.json())
        .then(data => {
            const copyrightTag = document.querySelector('.copyright-tag');
            copyrightTag.innerHTML = data.copyrightText;

            const validationButtons = document.querySelector('.validation-buttons');
            data.validationLinks.forEach(link => {
                const anchor = document.createElement('a');
                anchor.id = link.id;
                anchor.href = link.href;
                anchor.style.textDecoration = 'none';
                const img = document.createElement('img');
                img.src = link.src;
                img.alt = link.alt;
                img.style.border = '0';
                img.width = '88';
                img.height = '31';
                anchor.appendChild(img);
                validationButtons.appendChild(anchor);
            });
        })
        .catch(error => console.error('Error loading footer:', error));
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

/* Functions for test.html page */

window.onload = function() {
    const quizBtn = document.querySelector('.quiz-test-btns .next-btn:first-child');
    const testBtn = document.querySelector('.quiz-test-btns .next-btn:last-child');
    const quizSection = document.getElementById('test-top');
    const quizContainer = document.getElementById('quiz-container');
    const testContainer = document.getElementById('test-container');
    const exitQuizBtn = document.getElementById('exit-quiz-btn');
    const quizResetBtn = document.getElementById('quiz-reset-btn');
    const quizSubmitBtn = document.getElementById('quiz-submit-btn');
    const exitTestBtn = document.getElementById('exit-test-btn');
    const testResetBtn = document.getElementById('test-reset-btn');
    const testSubmitBtn = document.getElementById('test-submit-btn');

    quizBtn.addEventListener('click', function() {
        quizSection.style.display = 'none';
        quizContainer.style.display = 'block';
    });

    testBtn.addEventListener('click', function() {
        quizSection.style.display = 'none';
        testContainer.style.display = 'block';
    });

    exitQuizBtn.addEventListener('click', function() {
        if (confirm("Are you sure you want to exit the quiz?")) {
            window.location.href = 'test.html';
        }
    });

    exitTestBtn.addEventListener('click', function() {
        if (confirm("Are you sure you want to exit the test?")) {
            window.location.href = 'test.html';
        }
    });

    quizResetBtn.addEventListener('click', function() {
        if (confirm("Are you sure you want to reset the quiz?")) {
            const quizForms = document.querySelectorAll('#quiz-container .answers form');
            quizForms.forEach(quizForm => {
                quizForm.reset();
            });

            const quizResult = document.getElementById('quiz-result');
            quizResult.innerText = '';
            
            const answerLabels = document.querySelectorAll('#quiz-container label');
            answerLabels.forEach(label => {
                label.style.color = '';
            });
        }
    });

    testResetBtn.addEventListener('click', function() {
        if (confirm("Are you sure you want to reset the test?")) {
            const testForms = document.querySelectorAll('#test-container .answers form');
            testForms.forEach(testForm => {
                testForm.reset();
            });

            const testResult = document.getElementById('test-result');
            testResult.innerText = '';
            
            const answerLabels = document.querySelectorAll('#test-container label');
            answerLabels.forEach(label => {
                label.style.color = '';
            });
        }
    });

    quizSubmitBtn.addEventListener('click', function() {
        const quizForms = document.querySelectorAll('#quiz-container .answers form');
        let correctCount = 0;
        let totalQuestions = 0;
    
        quizForms.forEach(quizForm => {
            const selectedAnswer = quizForm.querySelector('input[type="radio"]:checked');
            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                const correctValue = quizForm.querySelector('span[id*="quiz-correct-answer"]').innerText;
                if (userAnswer === correctValue) {
                    correctCount++;
                }
                totalQuestions++;
            }
        });
    
        const percentage = totalQuestions === 0 ? 0 : ((correctCount / totalQuestions) * 100).toFixed(2);
    
        const quizResult = document.getElementById('quiz-result');
        quizResult.innerText = `${correctCount} | ${totalQuestions} Correct (${percentage}%)`;
    
        quizForms.forEach(quizForm => {
            const correctSpan = quizForm.querySelector('span[id*="quiz-correct-answer"]');
            correctSpan.style.color = 'green';
        });
        
    });

    testSubmitBtn.addEventListener('click', function() {
        const testForms = document.querySelectorAll('#test-container .answers form');
        let correctCount = 0;
        let totalQuestions = 0;
    
        testForms.forEach(testForm => {
            const selectedAnswer = testForm.querySelector('input[type="radio"]:checked');
            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                const correctValue = testForm.querySelector('span[id*="test-correct-answer"]').innerText;
                if (userAnswer === correctValue) {
                    correctCount++;
                }
                totalQuestions++;
            }
        });
    
        const percentage = totalQuestions === 0 ? 0 : ((correctCount / totalQuestions) * 100).toFixed(2);
    
        const testResult = document.getElementById('test-result');
        testResult.innerText = `${correctCount} | ${totalQuestions} Correct (${percentage}%)`;
    
        testForms.forEach(testForm => {
            const correctSpan = testForm.querySelector('span[id*="test-correct-answer"]');
            correctSpan.style.color = 'green';
        });
        
    });
};



