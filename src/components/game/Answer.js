import React, { useContext, useState, useEffect } from "react";
import GameContext from "../../context/store";
import { Title, BlinkedButton } from "../styled/StyledContainer";
import Question from "./Question";

const Answer = props => {
  //eslint-disable-next-line
  const [value, dispatch] = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    setColor("darkorange");
  }, [value.questions]);

  const checkAnswer = e => {
    for (let i = 0; i < 1000; i++) {}
    if (e === props.correct) {
      setColor(" green");
      setTimeout(() => {
        dispatch({
          action: {
            type: "CORRECT",
            payload: e
          }
        });
        dispatch({
          action: {
            type: "NEXT_QUESTION"
          }
        });
      }, 2000);
    } else {
      setColor("red");
      setTimeout(() => {
        dispatch({
          action: {
            type: "WRONG",
            payload: e
          }
        });
        dispatch({
          action: {
            type: "NEXT_QUESTION"
          }
        });
      }, 2000);
    }

    return <Question />;
  };

  const [color, setColor] = useState("darkorange");

  return (
    <Title subtitle>
      <BlinkedButton
        style={{ background: `${color}` }}
        value={props.answer}
        onClick={e => checkAnswer(e.target.value)}
      >
        {decodeURIComponent(props.answer)}
      </BlinkedButton>
    </Title>
  );
};

export default Answer;
