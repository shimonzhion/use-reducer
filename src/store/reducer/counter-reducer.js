import {UP_ACTION,RESET_ACTION,DOWN_ACTION,UPDATE_COUNTER} from "../action/counter-types"


export const reducer = (state, action) => {
    switch (action.type) {
      case UP_ACTION:
        return +state + 1;
      case DOWN_ACTION:
        return state - 1;
      case RESET_ACTION:
        return state = 0;
      case UPDATE_COUNTER:
        return action.payload 
  
      default:
        return state;
    }
  };