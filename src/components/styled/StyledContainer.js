import styled , {css} from "styled-components";

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
  box-shadow: 10px 20px 30px  orange  
`;


export const Button = styled.button`
  padding: 7px 7px;
  background: orange;
  color:white;
  border:none;
  border-radius: 5px;
  font-size : 18px;
  cursor: pointer;
  &:hover{
      background:olive;
      color:orange;
      
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
      font-size:24px`}

`