import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../context/store";
import { StyledContainer, Title } from "../styled/StyledContainer";
import { shuffleArray } from "../../logic/ArrayManipulation";
import { Button } from "../styled/StyledContainer";
const Question = props => {
  const [value, dispatch] = useContext(GameContext);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const checkAnswer = e => {
    if (e.target.value === "") {
      return <h1>Gerogds</h1>;
    }
  };
  useEffect(() => {
    setAnswers([]);
    const r = Math.floor(Math.random() * 10);
    const p = shuffleArray(value.questions);
    setQuestion(value.questions[r].question);
    const ar = [
      value.questions[r].correct_answer,
      ...value.questions[r].incorrect_answers
    ];
    setAnswers(ar);
  }, []);

  return (
    <StyledContainer>
      <Title subtitle> {decodeURI(question)}</Title>
      <div className="answers">
        {answers.map((v, i) => (
          <Button value={v} onClick={e => checkAnswer(e)}>
            {v}{" "}
          </Button>
        ))}
      </div>
    </StyledContainer>
  );
};

export default Question;
