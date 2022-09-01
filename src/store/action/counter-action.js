import{UPDATE_COUNTER,UP_ACTION ,RESET_ACTION,DOWN_ACTION} from"../action/counter-types"


  const upCounterAction =()=>{
   return {type: UP_ACTION } 
  } 
 const updateCounterAction = (newNumber)=>{
  return {type:UPDATE_COUNTER ,payload:newNumber}
 }

  const restCounterAction =()=>{
  return  {type:RESET_ACTION}}  
  
  const downCounterAction = ()=>{ return{type:DOWN_ACTION} }

  export {upCounterAction,updateCounterAction,restCounterAction,downCounterAction}