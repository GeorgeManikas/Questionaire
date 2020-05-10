import React, {useContext} from 'react'
import GameContext from '../context/store'
function LevelSelect() {
    const levelOfDifficulty = ['easy','medium','hard']
    //eslint-disable-next-line
    const [value,dispatch] = useContext(GameContext)
    
    const handleLevelSelect = (e)=>{
        dispatch({action:{
            type:'LEVEL_SELECT',
            payload: e.target.value
        }})
    }

    return (
        <div>
            <select name="" id="" onChange={(e)=> handleLevelSelect(e)}>
                {levelOfDifficulty.map((v,i)=>
                <option key={i} value={v} >{v} </option>)}
            </select>
        </div>
    )
}

export default LevelSelect
