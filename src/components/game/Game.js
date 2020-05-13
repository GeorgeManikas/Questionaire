import React, { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../context/questionsStore";
import GameContext from "../../context/store";
import { StyledContainer, Title, Button } from "../styled/StyledContainer";
import { Redirect } from "react-router";
import Question from "./Question";

const Game = ({}) => {
  const [questions, dispatchQuestions] = useContext(QuestionsContext);
  const [value, dispatch] = useContext(GameContext);
  console.log(value);
  const [endGame, setEndGame] = useState(false);
  return (
    <StyledContainer>
      <Title > In game</Title>
      <hr />
      <Question />
      <Button onClick={() => setEndGame(true)}> Quit </Button>
      {endGame && <Redirect to="/" />}
    </StyledContainer>
  );
};

export default Game;
