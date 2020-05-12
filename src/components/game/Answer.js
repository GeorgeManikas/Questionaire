import React, { useContext, useState } from "react";
import { Title, Button } from "../styled/StyledContainer";

const Answer = props => {
  const [found, setFound] = useState(false);
  const { answer, value } = props;
  const btnStyle = {
    background: props.found && "green"
  };

  return (
    <Title subtitle>
      <Button
        style={btnStyle}
        value={answer}
        onClick={e => props.onCheckAnswer(e.target.value)}
      >
        {answer}
      </Button>
    </Title>
  );
};

export default Answer;
