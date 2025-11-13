const quizData = [
  // Cambodian Literature
  {
    id: 1,
    category: "Cambodian Literature",
    question: "Cambodian literature spans over a millennium with early inscriptions emerging during which era?",
    options: ["Lan Xang era", "Angkorian era", "Pagan era", "Srivijaya era"],
    correct: 1
  },
  {
    id: 2,
    category: "Cambodian Literature",
    question: "What is Angkor Wat known as?",
    options: ["Palace temple", "Temple churches", "Temple fortress", "Monastic palace"],
    correct: 0
  },
  {
    id: 3,
    category: "Cambodian Literature",
    question: "Around which century did the Khmer language replace Sanskrit as the primary literary medium?",
    options: ["10th century", "12th century", "14th century", "16th century"],
    correct: 0
  },
  {
    id: 4,
    category: "Cambodian Literature",
    question: "What preserved texts on precious palm leaves during the Cambodian era?",
    options: ["Royal palaces", "Buddhist monasteries", "Trading guilds", "War archives"],
    correct: 1
  },
  {
    id: 5,
    category: "Cambodian Literature",
    question: "Which tale entertained and imparted moral lessons across generations?",
    options: ["Reamker", "Judge Rabbit", "Sang Sinxay", "Thao Cheuang"],
    correct: 0
  },
  {
    id: 6,
    category: "Cambodian Literature",
    question: 'What is "chbap" in Cambodian literature?',
    options: ["Religious hymn", "Code of conduct poetry", "Heroic chant", "War epic"],
    correct: 1
  },
  {
    id: 7,
    category: "Cambodian Literature",
    question: "The Reamker is taught in Cambodian schools as part of what?",
    options: ["Religious ritual", "Cultural curriculum", "Political education", "Historical archive"],
    correct: 1
  },
  
  // Lao Literature
  {
    id: 8,
    category: "Lao Literature",
    question: "Who founded Lan Xang in 1353?",
    options: ["King Siliwangi", "Prince Fa Ngum", "King Jayavarman II", "Prince Kadita"],
    correct: 1
  },
  {
    id: 9,
    category: "Lao Literature",
    question: "What does Lan Xang mean?",
    options: ["Land of a Thousand Temples", "Land of a Million Elephants", "Land of Gold", "Land of the Rising River"],
    correct: 1
  },
  {
    id: 10,
    category: "Lao Literature",
    question: "Lao classical masterpieces flourished under what kind of patronage?",
    options: ["Royal and monastic", "Agricultural and trade", "Folk and tribal", "Military and noble"],
    correct: 0
  },
  {
    id: 11,
    category: "Lao Literature",
    question: "What did temples serve as in Lao literature's context?",
    options: ["Entertainment halls", "Cultural and educational hubs", "Marketplaces", "Military centers"],
    correct: 1
  },
  {
    id: 12,
    category: "Lao Literature",
    question: "In modern Lao literature, which theme is explored?",
    options: ["Economic growth", "Identity and political struggle", "Environmental protection", "Architecture"],
    correct: 1
  },
  {
    id: 13,
    category: "Lao Literature",
    question: "What challenge do Lao contemporary writers face?",
    options: ["Censorship", "Lack of paper", "Poor translation", "Weather"],
    correct: 0
  },
  
  // The Crocodile and the Five Judges
  {
    id: 14,
    category: "The Crocodile and the Five Judges",
    question: "Why did the fisherman judge the crocodile innocent?",
    options: ["Fear of revenge", "Friendship", "Hatred", "Bribery"],
    correct: 0
  },
  {
    id: 15,
    category: "The Crocodile and the Five Judges",
    question: "Who was the judge that hated the crocodile?",
    options: ["Fisherman", "One-armed old man", "Monkey", "Rabbit"],
    correct: 1
  },
  {
    id: 16,
    category: "The Crocodile and the Five Judges",
    question: "Which judge was fooled by bribes?",
    options: ["Rabbit", "Lizard", "Monkey", "Fisherman"],
    correct: 2
  },
  {
    id: 17,
    category: "The Crocodile and the Five Judges",
    question: "Who was the only fair judge?",
    options: ["Rabbit", "Monkey", "Lizard", "Old man"],
    correct: 0
  },
  {
    id: 18,
    category: "The Crocodile and the Five Judges",
    question: "What happened to the crocodile at the end?",
    options: ["Escaped to the river", "Was killed by the cart-driver", "Was forgiven", "Became a king"],
    correct: 1
  },
  
  // The Mosquito (Laos Tale)
  {
    id: 19,
    category: "The Mosquito (Laos Tale)",
    question: "Who was Ngoe Tam's wife?",
    options: ["Princess Kadita", "Nhan Deep", "Dewi Mutiara", "Larasati"],
    correct: 1
  },
  {
    id: 20,
    category: "The Mosquito (Laos Tale)",
    question: "Who was the genii of medicine?",
    options: ["Old man", "Rabbit", "Fisherman", "King Siliwangi"],
    correct: 0
  },
  {
    id: 21,
    category: "The Mosquito (Laos Tale)",
    question: "What did the old man tell Ngoe Tam to do?",
    options: ["Bury his wife", "Drop three drops of blood on her", "Sing a song", "Burn the coffin"],
    correct: 1
  },
  {
    id: 22,
    category: "The Mosquito (Laos Tale)",
    question: "Into what creature did Nhan Deep return?",
    options: ["Butterfly", "Mosquito", "Bird", "Snake"],
    correct: 1
  },
  
  // The Two Women Scrambled for a Baby
  {
    id: 23,
    category: "The Two Women Scrambled for a Baby",
    question: "How did the king know who the real mother was?",
    options: ["She let go out of pity", "She fought harder", "She cried loudly", "She bribed the judge"],
    correct: 0
  },
  
  // Indonesian Literature
  {
    id: 24,
    category: "Indonesian Literature",
    question: "Indonesian literature reflects the country's what?",
    options: ["Economic growth", "Complex history and diversity", "Agricultural development", "Technological progress"],
    correct: 1
  },
  {
    id: 25,
    category: "Indonesian Literature",
    question: "Early Indonesian literature was influenced by which traditions?",
    options: ["Hindu-Buddhist", "Islamic", "Western", "Roman"],
    correct: 0
  },
  {
    id: 26,
    category: "Indonesian Literature",
    question: "Modern Indonesian literature was influenced by which culture?",
    options: ["Western styles", "Chinese", "Japanese", "Thai"],
    correct: 0
  },
  {
    id: 27,
    category: "Indonesian Literature",
    question: "Contemporary Indonesian literature explores what themes?",
    options: ["War", "Identity, politics, and social justice", "Nature and animals", "Comedy and love"],
    correct: 1
  },
  {
    id: 28,
    category: "Indonesian Literature",
    question: 'What is "Puisi" in Indonesian literature?',
    options: ["Drama", "Poem", "Folktale", "Novel"],
    correct: 1
  },
  {
    id: 29,
    category: "Indonesian Literature",
    question: "What is the title of the iconic Indonesian poem?",
    options: ["Aku (1943)", "Bumi Manusia (1980)", "Si Djamal (1950)", "Sang Sinxay"],
    correct: 0
  },
  {
    id: 30,
    category: "Indonesian Literature",
    question: 'What does "Cerita Rakyat" mean?',
    options: ["Historical record", "Folklore", "Drama", "Modern novel"],
    correct: 1
  },
  
  // The Legend of Nyi Roro Kidul
  {
    id: 31,
    category: "The Legend of Nyi Roro Kidul",
    question: "Who was the father of Princess Kadita?",
    options: ["King Siliwangi", "Prince Fa Ngum", "King Jayavarman II", "Old Man"],
    correct: 0
  },
  {
    id: 32,
    category: "The Legend of Nyi Roro Kidul",
    question: "What was Queen Dewi Mutiara's motive?",
    options: ["Jealousy and ambition", "Compassion", "Revenge for her daughter", "Political power"],
    correct: 0
  },
  {
    id: 33,
    category: "The Legend of Nyi Roro Kidul",
    question: "What transformed Princess Kadita into Nyi Roro Kidul?",
    options: ["A magical potion", "A sea storm", "A curse by a monk", "A jealous servant"],
    correct: 2
  },
  {
    id: 34,
    category: "The Legend of Nyi Roro Kidul",
    question: "What color clothing is said to attract Nyi Roro Kidul's attention?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correct: 2
  },
  {
    id: 35,
    category: "The Legend of Nyi Roro Kidul",
    question: "What does Nyi Roro Kidul's story symbolize?",
    options: ["Transformation and resilience", "Death and punishment", "Revenge and hatred", "Power and greed"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let filteredQuiz = [];

// Shuffle array function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize the quiz
function initializeQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswers = [];
  filteredQuiz = shuffleArray([...quizData]);
  displayQuestion();
}

// Display current question
function displayQuestion() {
  const container = document.getElementById('quiz-container');
  
  if (currentQuestion >= filteredQuiz.length) {
    showResults();
    return;
  }
  
  const question = filteredQuiz[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const userAnswer = selectedAnswers[currentQuestion];
  
  let html = `
    <div class="question-container">
      <div class="question-header">
        <span class="category-badge">${question.category}</span>
        <span class="question-number">Question ${currentQuestion + 1} of ${filteredQuiz.length}</span>
      </div>
      
      <h2 class="question-text">${question.question}</h2>
      
      <div class="options-container">
  `;
  
  question.options.forEach((option, index) => {
    const isSelected = selectedAnswers[currentQuestion] === index;
    const isCorrect = index === question.correct;
    let optionClass = 'option-label';
    
    if (isAnswered) {
      if (isCorrect) {
        optionClass += ' option-correct';
      } else if (isSelected && !isCorrect) {
        optionClass += ' option-incorrect';
      }
    }
    
    let feedbackIcon = '';
    if (isAnswered && isCorrect) {
      feedbackIcon = ' ✓';
    } else if (isAnswered && isSelected && !isCorrect) {
      feedbackIcon = ' ✗';
    }
    
    html += `
      <label class="${optionClass}">
        <input 
          type="radio" 
          name="answer" 
          value="${index}"
          ${isSelected ? 'checked' : ''}
          ${isAnswered ? 'disabled' : ''}
          onchange="selectAnswer(${index})"
        />
        <span class="option-text">${String.fromCharCode(97 + index)}) ${option}<span class="feedback-icon">${feedbackIcon}</span></span>
      </label>
    `;
  });
  
  html += `
      </div>
  `;
  
  if (isAnswered) {
    const isCorrect = userAnswer === question.correct;
    html += `
      <div class="answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
        <span class="feedback-title">${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</span>
        <p>The correct answer is: <strong>${String.fromCharCode(97 + question.correct)}) ${question.options[question.correct]}</strong></p>
      </div>
    `;
  }
  
  html += `
      <div class="navigation-buttons">
        <button onclick="previousQuestion()" ${currentQuestion === 0 || !isAnswered ? 'disabled' : ''} class="btn btn-secondary">
          ← Previous
        </button>
        <button onclick="nextQuestion()" ${!isAnswered ? 'disabled' : ''} class="btn btn-primary">
          ${currentQuestion === filteredQuiz.length - 1 ? 'Submit Quiz' : 'Next'} →
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Select an answer
function selectAnswer(index) {
  selectedAnswers[currentQuestion] = index;
  displayQuestion();
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestion < filteredQuiz.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    submitQuiz();
  }
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

// Submit quiz and calculate score
function submitQuiz() {
  score = 0;
  filteredQuiz.forEach((question, index) => {
    if (selectedAnswers[index] === question.correct) {
      score++;
    }
  });
  showResults();
}

// Show results
function showResults() {
  const container = document.getElementById('quiz-container');
  const percentage = Math.round((score / filteredQuiz.length) * 100);
  const percentage_float = (score / filteredQuiz.length) * 100;
  
  let resultClass = 'result-excellent';
  let resultMessage = 'Excellent! 🎉';
  
  if (percentage_float < 50) {
    resultClass = 'result-poor';
    resultMessage = 'Needs Improvement 📚';
  } else if (percentage_float < 70) {
    resultClass = 'result-good';
    resultMessage = 'Good Job! 👍';
  } else if (percentage_float < 85) {
    resultClass = 'result-very-good';
    resultMessage = 'Very Good! 🌟';
  }
  
  let html = `
    <div class="results-container ${resultClass}">
      <h1>Quiz Completed!</h1>
      <p class="result-message">${resultMessage}</p>
      
      <div class="score-display">
        <div class="score-circle">
          <span class="score-number">${percentage}%</span>
        </div>
        <p class="score-text">You scored <strong>${score} out of ${filteredQuiz.length}</strong> questions correctly</p>
      </div>
      
      <div class="answer-review">
        <h2>Answer Review</h2>
  `;
  
  filteredQuiz.forEach((question, index) => {
    const isCorrect = selectedAnswers[index] === question.correct;
    const userAnswer = question.options[selectedAnswers[index]];
    const correctAnswer = question.options[question.correct];
    
    html += `
      <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
        <div class="review-header">
          <span class="review-number">Q${index + 1}</span>
          <span class="review-status">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
        </div>
        <p class="review-question">${question.question}</p>
        <p class="review-answer">
          Your answer: <strong>${userAnswer || 'Not answered'}</strong>
        </p>
        ${!isCorrect ? `<p class="review-correct">Correct answer: <strong>${correctAnswer}</strong></p>` : ''}
      </div>
    `;
  });
  
  html += `
      </div>
      
      <div class="action-buttons">
        <button onclick="initializeQuiz()" class="btn btn-primary">Retake Quiz</button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Start the quiz on page load
window.addEventListener('DOMContentLoaded', function() {
  initializeQuiz();
});
