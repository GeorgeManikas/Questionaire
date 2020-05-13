import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../context/store";
import { StyledContainer, Title } from "../styled/StyledContainer";
import { shuffleArray } from "../../logic/ArrayManipulation";
import { Button } from "../styled/StyledContainer";
import Answer from "./Answer";
const Question = props => {
  const [value, dispatch] = useContext(GameContext);
  const [question, setQuestion] = useState();
  const [correct, setCorrect] = useState("");
  const [found, setFound] = useState(false);
  const [answers, setAnswers] = useState([]);

  
  useEffect(() => {
    setAnswers([]);
    const r = Math.floor(Math.random() * 10);
    const p = shuffleArray(value.questions);
    setQuestion(value.questions[r].question);
    setCorrect(value.questions[r].correct_answer);
    const ar = [
      value.questions[r].correct_answer,
      ...value.questions[r].incorrect_answers
    ];
    setAnswers(shuffleArray(ar));
  }, []);

  const btnStyle = {
    background: found ? "green" : "red"
  };
  return (
    <StyledContainer>
      <Title subtitle> {(decodeURI(escape(question)))}</Title>
      <div className="answers">
        {answers.map((v, i) => (
          <Answer
            color={setFound}
            answer={v}
            key={i}
            correct={correct}
          >
            {v}{" "}
          </Answer>
        ))}
      </div>
    </StyledContainer>
  );
};

export default Question;
