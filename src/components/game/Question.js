import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../context/store";
import { StyledContainer, Title } from "../styled/StyledContainer";
import { shuffleArray } from "../../logic/ArrayManipulation";

import Answer from "./Answer";
const Question = props => {
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);
  const [question, setQuestion] = useState();
  const [correct, setCorrect] = useState("");
  //eslint-disable-next-line
  const [found, setFound] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let ar;
    console.log(value);
    if (value.qlength > 0) {
      ar = [
        ...value.currentQuestion.incorrect_answers,
        value.currentQuestion.correct_answer
      ];
      setQuestion(value.currentQuestion.question);
      setAnswers(shuffleArray(ar));
      setCorrect(value.currentQuestion.correct_answer);
    }
  }, [question, value.questions, value.qlength, value.currentQuestion, value]);

  return (
    <StyledContainer>
      <Title subtitle>{decodeURIComponent(question)}</Title>
      <div className="answers">
        {answers.map((v, i) => (
          <Answer color={setFound} answer={v} key={i} correct={correct}>
            <p>{decodeURIComponent(v)}</p>{" "}
          </Answer>
        ))}
      </div>
    </StyledContainer>
  );
};

export default Question;
