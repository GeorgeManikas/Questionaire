import React, { useContext } from "react";
import { StyledSelect } from "../components/styled/StyledSelect";
import { StyledLabel } from "./styled/StyledLabel";
import GameContext from "../context/store";
function TypeOfQuestions() {
  const typeOfQuestions = [
    ["Multiple Choice", "multiple"],
    ["True/False", "boolean"]
  ];
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);

  const handleLevelSelect = e => {
    dispatch({
      action: {
        type: "TYPE_SELECT",
        payload: e.target.value
      }
    });
  };

  return (
    <div>
      <StyledLabel htmlFor="typeOfQuestions">
        {" "}
        True/False of Multiple Choice{" "}
      </StyledLabel>
      <StyledSelect
        name=""
        id="typeOfQuestions"
        onChange={e => handleLevelSelect(e)}
      >
        {typeOfQuestions.map((v, i) => (
          <option key={i} value={v[1]}>
            {v[0]}{" "}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default TypeOfQuestions;
