import React, { useContext } from "react";
import GameContext from "../context/store";
import { StyledSelect } from "../components/styled/StyledSelect";
import { StyledLabel } from "./styled/StyledLabel";
function LevelSelect() {
  const levelOfDifficulty = ["easy", "medium", "hard"];
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);

  const handleLevelSelect = e => {
    dispatch({
      action: {
        type: "LEVEL_SELECT",
        payload: e.target.value
      }
    });
  };

  return (
    <>
      <StyledLabel htmlFor="diff"> difficulty </StyledLabel>
      <StyledSelect name="" id="diff" onChange={e => handleLevelSelect(e)}>
        {levelOfDifficulty.map((v, i) => (
          <option key={i} value={v}>
            {v}{" "}
          </option>
        ))}
      </StyledSelect>
    </>
  );
}

export default LevelSelect;
