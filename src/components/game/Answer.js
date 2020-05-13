import React, { useContext, useState } from "react";
import GameContext from '../../context/store';
import { Title, Button, BlinkedButton } from "../styled/StyledContainer";

const Answer = props => {
    const [value,dispatch] = useContext(GameContext)

  
    const checkAnswer = e => {
      console.log(value)
      for (let i = 0; i < 1000; i++) { }
      if (e === props.correct) {
        setColor('green')
      } else {
        setColor('red')
      }


      
    };




    const [color, setColor] = useState('darkorange')
  

    return (
      <Title subtitle>
        <BlinkedButton
          style={{ background: `${color}` }}
          value={props.answer}
          onClick={(e)=> checkAnswer(e.target.value)}
        >
          {props.answer}
        </BlinkedButton>
      </Title>
    );
  };

  export default Answer;
