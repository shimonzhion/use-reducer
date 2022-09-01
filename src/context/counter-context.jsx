import { createContext,useReducer } from "react";
import {reducer} from "../store/reducer/counter-reducer"



export const counterContext = createContext()


export default function CounterProvider ({children}){


    const [stateCounter, dispatch] = useReducer(reducer,0);
return(
<counterContext.Provider value={{stateCounter,dispatch}}>
 {children}
</counterContext.Provider>

)


}