const quizData = [
    {
        question: "What does HTML stands for ?",
        a:"Hypertext Markdown Language",
        b:"Hypertext Markup Language",
        c:"HyperText Machine Language",
        d:"Hyperloop Machine Language",
        correct: "b"
    },
    {
        question: "Which language runs in a web browser ?",
        a:"Java",
        b:"C",
        c:"JavaScript",
        d:"Python",
        correct: "c"
    },
    {
        question: "What does CSS stands for ?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheet",
        c:"Cascading Simple Sheet",
        d:"Central Style Sheet",
        correct: "b"
    },
    {
        question: "When was JavaScript launched?",
        a:"1997",
        b:"2010",
        c:"1990",
        d:"1995",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn =document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2> You answered correctly  ${score} / ${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})