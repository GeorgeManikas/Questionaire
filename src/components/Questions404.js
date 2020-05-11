import React , {useContext,useState} from "react";
import GameContext from '../context/store'
import {Button, StyledContainer} from './styled/StyledContainer'
import NewGameModal from "./NewGameModal";
import { Redirect } from "react-router-dom";
import {Title} from '../components/styled/StyledContainer'
const Question404 = props => {
  const [value,dispatch] = useContext(GameContext)
  const [goBack,setGoBack] = useState(false)

  const clearState = () => {
    dispatch({action:{type:'RESET'}})
    setGoBack(true)
  }
  return (
    <>
      <StyledContainer>
      <Title subtitle>Sorry, no questions found satisfying to your criteria .... </Title>
           <Button onClick={clearState}>  Back  </Button>
           {goBack && <Redirect to="/"></Redirect>}
      </StyledContainer>
    </>
     
  );
};

export default Question404;
