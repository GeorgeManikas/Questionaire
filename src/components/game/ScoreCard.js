import React, { useContext } from "react";
import { Title } from "../styled/StyledContainer";
import GameContext from "../../context/store";
const ScoreCard = () => {
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);
  return (
    <>
    <Title> Score : {value.score}/{value.amount} </Title>
    <Title subtitle> Questions left : {value.questions.length}</Title>
    </>
  );
};

export default ScoreCard;
