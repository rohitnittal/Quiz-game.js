const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: 2
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function renderQuestion() {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = '';
  const questionElement = document.createElement('h2');
  questionElement.textContent = questions[currentQuestion].question;
  questionContainer.appendChild(questionElement);

  const optionsElement = document.createElement('ul');
  questions[currentQuestion].options.forEach((option, index) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => {
      if (index === questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        renderQuestion();
      } else {
        displayScore();
      }
    });
    optionsElement.appendChild(optionElement);
  });
  questionContainer.appendChild(optionsElement);
}

function displayScore() {
  const scoreContainer = document.getElementById('score-container');
  scoreContainer.innerHTML = '';
  const scoreElement = document.createElement('h2');
  scoreElement.textContent = Your score: ${score} / ${questions.length};
  scoreContainer.appendChild(scoreElement);
}

renderQuestion();
