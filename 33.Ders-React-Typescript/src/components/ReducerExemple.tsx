import React, { useReducer } from 'react'


type CounterType = {
    count:number
}

type ActionType = {
    type:string,
    pyload:number
}

type ResetType = {
    type: "reset"
}

type CounterAction = ActionType | ResetType

const initialState = {count:0}
const reducer = (state:CounterType,action:CounterAction) =>{

    switch (action.type) {
        case "increment" :
            return {count: state.count + action.pyload}
        case 'decrement':
            return {count: state.count - action.pyload}
        case 'reset':
            return initialState;
        default:
            return state;
    }
}


function ReducerExemple() {
    
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        Sayı : {state.count} <br></br>
        <button onClick={()=> dispatch({type: 'increment',pyload: 15 })} >15 Arttır</button>
        <button onClick={()=> dispatch({type: 'decrement',pyload: 15 })} >15 Azalt</button>
        <button onClick={()=> dispatch({type:'reset'})}>Sıfırla</button>
    </div>
  )
}

export default ReducerExemple