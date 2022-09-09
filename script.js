const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Motorboats Lexus",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0
let score = 0

const deselectAnswers = () => {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

const loadQuiz = () => {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}





const getSelected = () => {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    let messageContainer = document.getElementById('messageContainer')
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
            messageContainer.innerHTML = 'Correct'
            messageContainer.style.backgroundColor = 'green'
        } else {
            messageContainer.innerHTML = 'Incorrect'
            messageContainer.style.backgroundColor = 'red'
        }

       
        
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    } else {
        messageContainer.innerHTML = 'Please select a answer'
    }
    setTimeout(() => {
        messageContainer.innerHTML = ''
        messageContainer.style.backgroundColor = 'transparent'


    }, 1000)
})
loadQuiz()

let checkerButtons = document.querySelectorAll('.checker-button')
console.log(checkerButtons)
checkerButtons.forEach((c) => {
    c.addEventListener('click', (e) => {
        let result = confirm('Are you sure?');
        if (result == false) {
            e.preventDefault();
        }   
    })
})
