document.addEventListener('DOMContentLoaded', () => {
    const startPage = document.querySelector('.start-page');
    const quizContainer = document.querySelector('.quiz-container');
    const btnStart = document.getElementById('btn-start');
    btnStart.addEventListener('click', () => {
        startPage.style.display = 'none';
        quizContainer.style.display = 'block';
    });

});

/* all answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

 
const question = document.getElementById('question'),
numberOfQuestion = document.getElementById('number-of-question'),
numberOfAllQuestion = document.getElementById('number-of-all-questions');

let indexOfQuestion, // index of the current question
indexOfPage = 0; // page index

const btnNext = document.getElementById('btn-next');

let score = 0; //result of qwiz

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');