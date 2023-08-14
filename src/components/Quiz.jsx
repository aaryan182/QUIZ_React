import React, { useState, useEffect } from 'react';
import '../components/Quiz.css'

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleTimeOver();
    }
  }, [timer]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTimer(20);
  };

  const handleTimeOver = () => {
    if (currentQuestionIndex < questions.length) {
      alert('Sorry, time is up! You have to restart the quiz.');
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimer(20);
    }
  };

  const calculateProgress = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div style={styles.quizContainer}>
        <div style={styles.progressContainer}>
          <div
            className="progress-circle"
            style={{
              background: `conic-gradient(#009688 ${calculateProgress()}%, transparent 0)`,
            }}
          ></div>
        </div>
        <div style={styles.questionContainer}>
          <h2 style={styles.question}>{currentQuestion.question}</h2>
          <p style={styles.timer}>Time Remaining: {timer} seconds</p>
          <ul style={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <li key={index} style={styles.option} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div style={styles.result}>
        <h2>Quiz completed!</h2>
        <p>Your score: {score}/7</p>
      </div>
    );
  };

  return (
    <div style={styles.quizContainer}>
      {currentQuestionIndex < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

export default Quiz;

const styles = {
};
