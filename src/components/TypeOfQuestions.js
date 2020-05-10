import React, {useContext} from 'react'
import GameContext from '../context/store'
function TypeOfQuestions() {
    const typeOfQuestions = [['Multiple Choice','multiple'],['True/False','boolean']]
    //eslint-disable-next-line
    const [value,dispatch] = useContext(GameContext)
    
    const handleLevelSelect = (e)=>{
        dispatch({action:{
            type:'TYPE_SELECT',
            payload: e.target.value
        }})
    }

    return (
        <div>
            <select name="" id="" onChange={(e)=> handleLevelSelect(e)}>
                {typeOfQuestions.map((v,i)=>
                <option key={i} value={v[1]} >{v[0]} </option>)}
            </select>
        </div>
    )
}

export default TypeOfQuestions