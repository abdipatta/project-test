import styled from "styled-components";
import Question from "./Question";

const Quiz = ({ questions, currentQuestion, handlerAnswerOption }) => {
  return (
    <>
      <QuestionContainer>
        <QuestionCount>
          <span>Question{currentQuestion + 1} </span>/ {questions.length}
        </QuestionCount>

        <QuestionText>{questions[currentQuestion].questionText}</QuestionText>
      </QuestionContainer>

      <AnswerOptionsContainer>
        {questions[currentQuestion].answerOptions.map((item) => (
          <Question
            key={item.id}
            {...item}
            handlerAnswerOption={handlerAnswerOption}
          />
        ))}
      </AnswerOptionsContainer>
    </>
  );
};

export default Quiz;

const QuestionContainer = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
`;

const AnswerOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
