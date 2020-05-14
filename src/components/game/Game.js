import React, { useContext, useState } from "react";

import GameContext from "../../context/store";
import { StyledContainer, Button } from "../styled/StyledContainer";
import { Redirect } from "react-router";
import Question from "./Question";
import ScoreCard from "./ScoreCard";

const Game = () => {
  const resetGame = () => {
    dispatch({ action: { type: "RESET" } });
    setEndGame(true);
  };
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);

  const [endGame, setEndGame] = useState(false);
  return (
    <StyledContainer>
      <ScoreCard />
      <hr />
      <Question />
      <Button onClick={resetGame}> Quit </Button>
      {endGame && <Redirect to="/" />}
    </StyledContainer>
  );
};

export default Game;
