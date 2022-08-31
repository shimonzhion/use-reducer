import { useReducer, useState } from "react";

import "./App.css";
import {UP_ACTION,RESET_ACTION,DOWN_ACTION} from "../src/store/action/counter-action";
import {reducer} from "./store/reducer/counter-reducer" 



 export let initialState = 0;



function App() {
  const [counter, dispatch] = useReducer(reducer,initialState);

  return <div className="App">
    <h1>{counter}</h1>
    <button onClick={()=>dispatch(UP_ACTION)}>+</button>
    <button onClick={()=>dispatch(RESET_ACTION)}>reset</button>
    <button onClick={()=>dispatch(DOWN_ACTION)}>-</button>
  
  </div>;
}

export default App;
