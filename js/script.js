const startQuiz = document.getElementById('start-quiz');
const quizRules = document.getElementById('quiz-rules');
const exitQuiz = document.getElementById('exit-quiz');
const continueQuiz = document.getElementById('continue')
startQuiz.addEventListener('click', () =>{
    quizRules.classList.remove('hidden');
    startQuiz.classList.add('hidden');
})
exitQuiz.addEventListener('click', ()=>{
    startQuiz.classList.remove('hidden');
    quizRules.classList.add('hidden');
})


