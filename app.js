const questions = [
  {
    "question": " Q.1 - Which of the following is a correct syntax to display Hello World in an alert box using JavaScript ?",
    "options": ["alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertbox('Hello World');"],
    "answer": "alert('Hello World');"
  },
  {
    "question": " Q.2 - What is the purpose of JavaScript in web development?",
    "options": ["To structure web pages", "To style web pages", "To add interactivity and dynamic content to web pages", "To add multimedia to web pages"],
    "answer": "To add interactivity and dynamic content to web pages"
  },

  {
    "question": " Q.3 - Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
    "options": ["let", "const", "var", "function"],
    "answer": "let"
  },

  {
    "question": " Q.4 - What does CSS stand for?",
    "options": ["Cascading Style Sheets", "File", "FileUpload"],
    "answer": "Cascading Style Sheets"
},

{
    "question": " Q.5 - What does HTML stand for?",
    "options": ["HyperText Markup Language", "HyperText Making Language", "HyperText Machine Language"],
    "answer": "HyperText Markup Language"
},

{
    "question": " Q.6 - What does JavaScript stand for?",
    "options": ["Java Scripting", "Java Structure Language", "Java Static Language"],
    "answer": "Java Scripting"
},

{
    "question": " Q.7 - What does PHP stand for?",
    "options": ["Personal Home Page", "Perella Home Page", "Personal Hard Pagese"],
    "answer": "Personal Home Page"
}

];

let currentQuestionIndex = 0;
let score = 0; 

function loadQuestion() {

  const currentQuestion = questions[currentQuestionIndex];

  const questionEl = document.getElementById("question");

  questionEl.innerHTML = currentQuestion.question;

  let answerList = document.getElementById("answers");
  answerList.innerHTML = "";

  currentQuestion.options.forEach(option => {

    let button = document.createElement("button");

    button.textContent = option;

    button.onclick = () => checkAnswer(option, button);

    answerList.appendChild(button);

  });
}

function checkAnswer(selectedAnswer, button) {

  const correctAnswer = questions[currentQuestionIndex].answer;

  const answerList = document.getElementById("answers");

  answerList.querySelectorAll('button').forEach(item => {

    if (item.textContent === correctAnswer) {

      item.style.backgroundColor = "#50C878";

      item.style.color = "white";

    } 
    
    else {

      item.style.backgroundColor = "#EE4B2B";

      item.style.color = "white";
    }

    item.style.border = "none";

    item.onclick = null;

  });


  if (selectedAnswer === correctAnswer) {
    score++;
  }

  document.getElementById("next-button").disabled = false; 

}

function nextQuestion() {

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {

    loadQuestion();

    document.getElementById("next-button").disabled = true; 

  }
  
  else {

    document.getElementById("question-container").innerHTML = `<h2>Quiz Over!</h2><p>Your final score is ${score} 🥳🔥</p>`;

    document.getElementById("next-button").style.display = "none";
  }
}

loadQuestion();
