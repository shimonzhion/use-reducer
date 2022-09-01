import { useState } from "react"
import { useContext } from "react"
import {counterContext} from "../../context/counter-context"
import { upCounterAction, updateCounterAction } from "../../store/action/counter-action"






export default function NumberInput (){
    const {stateCounter,dispatch}= useContext(counterContext)
    const [num,setNum]= useState(stateCounter)

    return (
        <div className="inputNumber">
      
         <label htmlFor="input-number">enter number</label>
        <input value={num} name="input-number" type="number"  onChange={(e)=>setNum(e.target.value)}/>
        <button onClick={()=>dispatch(updateCounterAction(num))}>click</button> 
        
        </div>
    )
}