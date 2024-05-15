import { useState } from "react";
import Quiz from "./Quiz";
import { QUESTIONS } from "../utils/constants";
import styled from "styled-components";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showeScore, setShoweScore] = useState(false);
  const [score, setScore] = useState(0);

  const handlerAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShoweScore(true);
    }
  };

  return (
    <App>
      {showeScore ? (
        <Score>
          You scorred {score} out of {QUESTIONS.length}
        </Score>
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          questions={QUESTIONS}
          handlerAnswerOption={handlerAnswerOption}
        />
      )}
    </App>
  );
};

export default QuizApp;

const App = styled.div`
  background-color: #252d4a;
  width: 450px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;

const Score = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  color: white;
`;
