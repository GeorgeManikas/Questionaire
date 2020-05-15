import React from 'react'
import { Title, StyledContainer } from '../styled/StyledContainer';
const GameOver = (props) => {
    return (
        <StyledContainer>
            <Title> Game Over </Title>
            <Title subtitle> Score : {props.score} of {props.amount} questions answered </Title>
        </StyledContainer>
    )
}

export default GameOver
