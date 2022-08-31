import {UP_ACTION,RESET_ACTION,DOWN_ACTION} from "../action/counter-action"


export const reducer = (state, action) => {
    switch (action.type) {
      case UP_ACTION.type:
        return state + 1;
      case DOWN_ACTION.type:
        return state - 1;
      case RESET_ACTION.type:
        return state = 0;
  
      default:
        return state;
    }
  };