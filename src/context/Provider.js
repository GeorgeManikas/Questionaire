import React, { useReducer } from "react";
import GameContext from "./store";
import { initialState } from "./initialState";
// reducer
const reducer = (state, { action }) => {
  switch (action.type) {
    case "PICK_CATEGORY":
      return { ...state, category: action.payload };
    case "NUMBER_OF_QUESTIONS":
      return { ...state, amount: action.payload };
    case "LEVEL_SELECT":
      return { ...state, difficulty: action.payload };
    case "TYPE_SELECT":
      return { ...state, type: action.payload };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        qlength: action.payload.length,
        currentQuestion: action.payload[0]
      };
    case "RESET":
      return initialState;
    case "CORRECT":
      return {
        ...state,
        score: state.score + 1,
        questions: state.questions.slice(1),
        qlength: state.questions.length
      };
    case "WRONG":
      return {
        ...state,
        // score: state.score + 1,
        questions: state.questions.slice(1),
        qlength: state.questions.length
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.questions[0]
      };

    default:
      return state;
  }
};

function Provider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={[value, dispatch]}>
      {children}
    </GameContext.Provider>
  );
}

export default Provider;
