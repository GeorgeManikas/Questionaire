import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  width: 70vw;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: auto;
  margin-top: 3rem;
  background: olive;
  box-shadow: 10px 20px 30px  darkorange  ;

  /* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 600px) {
  select {
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:stretch;
  }
}
  
`;


export const Button = styled.button`
  padding: 7px 7px;
  outline:20px;
  outline-color:red;
  background: orange;
  color:white;
  border:none;
  border-radius: 5px;
  font-size : 18px;
  cursor: pointer;
  &:hover{
      background:olive;
      color:orange;
      border:1px solid darkorange;
      
  }
`

export const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color:orange;
  font-stretch:expanded;
  font-size:48px;
  ${props =>
    props.subtitle &&
    css`
      font-size:24px;
    
    `}
  ${props =>
    props.dialog &&
    css`
    font-size:14px`}
    
`

export const BlinkedButton = styled.button`
  padding: 7px 7px;
  outline:20px;
  outline-color:red;
  background: orange;
  color:white;
  border:none;
  border-radius: 5px;
  font-size : 18px;
  cursor: pointer;
  &:focus{
    animation-name : changeColor;
    animation-duration: 0.3s;
    animation-iteration-count: 8;
    animation-timing-function:linear;
  }
  &:hover{
      background:olive;
      color:orange;
      border:1px solid darkorange;}

  
  @keyframes changeColor {
    from { background : darkorange}
    to {background:transparent}
    
  }

  
`