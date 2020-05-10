import React, {useContext} from 'react'
import GameContext from '../context/store'
function NoofQuestions() {
    const noOfQuestions = [10, 20, 40]
    //eslint-disable-next-line
    const [value,dispatch] = useContext(GameContext)
    
    const handleLevelSelect = (e)=>{
        dispatch({action:{
            type:'NUMBER_OF_QUESTIONS',
            payload: e.target.value
        }})
    }

    return (
        <div>
            <select name="" id="" onChange={(e)=> handleLevelSelect(e)}>
                {noOfQuestions.map((v,i)=>
                <option key={i} value={v} >{v} </option>)}
            </select>
        </div>
    )
}

export default NoofQuestions
