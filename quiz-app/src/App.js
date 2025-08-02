import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
        "Hyperlink Text Management Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Syntax",
        "Cascading Style Sheets",
        "Colorful Style Structure",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      correctAnswer: "React",
    },
    {
      question: "What year was JavaScript created?",
      options: ["1991", "1995", "1999", "2005"],
      correctAnswer: "1995",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  }

  if (showResult === true) {
    return (
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz App</h1>
        <h2 className="result-score">
          Final Score:{score}/{questions.length}
        </h2>
        <button className="restart-button" onClick={restartQuiz}>
          Restart the quiz
        </button>
      </div>
    );
  } else {
    return (
      <div className="question-section">
        <h1>Quiz App</h1>
        <h3 className="question-count">Question{currentQuestion + 1}</h3>
        <p className="question-text">{questions[currentQuestion].question}</p>

        <ul className="options-list">
          {questions[currentQuestion].options.map(function (option) {
            return (
              <li key={option}>
                <button
                  onClick={function () {
                    handleAnswer(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
