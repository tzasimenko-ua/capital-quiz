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