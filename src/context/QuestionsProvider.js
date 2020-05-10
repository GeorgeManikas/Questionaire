import {useReducer} from 'react';
import React from 'react'
import {QuestionsContext} from './questionsStore'
import {questionsState} from './questionsState'

const reducer = (state, {action}) => {
    switch (action.type){
       case 'FETCH_QUESTIONS':
           return {
               ...state,
               question: action.payload.question,
               correct_answer : action.payload.correct_answer,
               incorrect_answers : action.payload.incorrect_answers
           } 
        default:
            return state 
    }

}


export const QuestionsProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, questionsState )

    return(
        <QuestionsContext.Provider value={[value,dispatch]}>
            {children}
        </QuestionsContext.Provider>
    )
}

