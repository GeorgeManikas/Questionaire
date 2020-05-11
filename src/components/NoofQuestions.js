import React, { useContext } from "react";
import GameContext from "../context/store";
import { StyledSelect } from "../components/styled/StyledSelect";
import { StyledLabel } from "./styled/StyledLabel";
function NoofQuestions() {
  const noOfQuestions = [10, 20, 40];
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);

  const handleLevelSelect = e => {
    dispatch({
      action: {
        type: "NUMBER_OF_QUESTIONS",
        payload: e.target.value
      }
    });
  };

  return (
    <>
      <StyledLabel htmlFor="questions"> No of questions </StyledLabel>
      <StyledSelect
        name="questions"
        id="questions"
        onChange={e => handleLevelSelect(e)}
      >
        {noOfQuestions.map((v, i) => (
          <option key={i} value={v}>
            {v}{" "}
          </option>
        ))}
      </StyledSelect>
    </>
  );
}

export default NoofQuestions;
