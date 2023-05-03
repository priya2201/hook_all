import React ,{useReducer}from 'react'


const initialCount={
    firstCount:1,
    secondCounter:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Multiply':
            return {...state,firstCount : state.firstCount  * action.value}
            case 'Divisible':
                return {...state,firstCount : state.firstCount / action.value}
                case 'Multiply2':
                    return {...state,secondCounter : state.secondCounter  * action.value}
                    case 'Decrement2':
                        return {...state,secondCounter : state.secondCounter  / action.value}   
case 'reset':
    return initialCount
    default:
        return state
    }
}
function Counter4() {
    const [count,dispatch]=useReducer(reducer,initialCount)
  return (
    <div>

    <div>
     First Counter -{count.firstCount}
     </div>
     <div> Second Counter -{count.secondCounter}</div>
      <button onClick={()=>dispatch({type:'Multiply',value :2})}>Multiply by 2</button>
      <button onClick={()=>dispatch({type:'Divisible',value :2})}>Divisible by 2</button>
      <button onClick={()=>dispatch({type:'Multiply',value :5})}>Multiply by 5</button>
      <button onClick={()=>dispatch({type:'Divisible',value :5})}>Divisible by 5</button>
      <button onClick={()=>dispatch({type:'Multiply',value :10})}> Multiply by 10</button>
      <button onClick={()=>dispatch({type:'Divisible',value :10})}>Divisible by 10</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
<div>
<button onClick={()=>dispatch({type:'Multiply2',value :20})}>Multiply by 20 second counter</button>
<button onClick={()=>dispatch({type:'Decrement2',value :20})}>Divisible by 20 second counter</button>


</div>
    </div>
  )
}

export default Counter4
