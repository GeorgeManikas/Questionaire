import React from "react";

import LevelSelect from "./LevelSelect";
import { StyledContainer } from "./styled/StyledContainer";
import { QuestionsProvider } from "../context/QuestionsProvider";
import CategoriesList from "./CategoriesList";
import NoofQuestions from "./NoofQuestions";
import TypeOfQuestions from "./TypeOfQuestions";

const NewGameModal = () => {
  return (
    <StyledContainer>
      <CategoriesList />
      <NoofQuestions />
      <TypeOfQuestions />
      <LevelSelect />
    </StyledContainer>
  );
};

export default NewGameModal;
