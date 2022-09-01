import "./Counter.css";
import React from "react";
import {upCounterAction,updateCounterAction,restCounterAction,downCounterAction} from"../../../store/action/counter-action"
import { useContext } from "react";
import  {counterContext} from "../../../context/counter-context"




function Counter() {
  const {stateCounter,dispatch} = useContext(counterContext)
  return (
    <div className="counter">
      <h1>{stateCounter}</h1>
    <button onClick={()=>dispatch(upCounterAction())}>+</button>
    <button onClick={()=>dispatch(restCounterAction())}>reset</button>
    <button onClick={()=>dispatch(downCounterAction())}>-</button>
    <button onClick={()=>dispatch(updateCounterAction(7))}>--</button>
    </div>
  );
};

export default Counter;
