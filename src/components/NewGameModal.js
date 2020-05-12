import React, { useContext, useState } from "react";
import GameContext from "../context/store";
import axios from "axios";
import LevelSelect from "./LevelSelect";
import { StyledContainer, Title } from "./styled/StyledContainer";
import { QuestionsProvider } from "../context/QuestionsProvider";
import Question404 from "./Questions404";
import CategoriesList from "./CategoriesList";
import NoofQuestions from "./NoofQuestions";
import TypeOfQuestions from "./TypeOfQuestions";
import { Button } from "../components/styled/StyledContainer";
import { Redirect } from "react-router-dom";
const NewGameModal = () => {
  const fetchQuestions = value => {
    const { amount, category, difficulty, type } = value;
    let URL = "https://opentdb.com/api.php";
    axios
      .get(URL, {
        params: {
          amount,
          category,
          difficulty,
          type
        }
      })
      .then(res => {
        dispatch({
          action: {
            type: "SET_QUESTIONS",
            payload: res.data.results
          }
        });
        res.data.response_code !== 0
          ? setNotFound(true)
          : setQuestionsFound(true);
      });
  };

  const [notFound, setNotFound] = useState(false);
  const [questionsFound, setQuestionsFound] = useState(false);
  const [value, dispatch] = useContext(GameContext);
  const { amount, category, difficulty, type } = value;

  if (notFound) {
    return <Redirect to="/error" />;
  }
  return (
    <StyledContainer>
      <Title> Trivia Game</Title>
      <CategoriesList />
      <NoofQuestions />
      <TypeOfQuestions />
      <LevelSelect />
      <Button onClick={() => fetchQuestions(value)}> Start Game... </Button>
      {questionsFound && <Redirect to="/game" />}
    </StyledContainer>
  );
};

export default NewGameModal;
