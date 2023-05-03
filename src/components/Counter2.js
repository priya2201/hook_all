import React,{useReducer} from 'react'

    const initialName='vina'
    const reducer=(state,action)=>{
        switch(action){
            case 'developer':
            return  ('piyu')
            case 'ceo':
                return  ('guddu')
                case 'finance manager':
                    return initialName
                    default:
                        return state
        }
    }
    function Counter2() {
const[name,dispatch]=useReducer(reducer,initialName)
  return (
    <div>
        Name-{name}
      <button onClick={()=> dispatch('developer')}>Developer</button>
      <button onClick={()=> dispatch('ceo')}>Ceo</button>
      <button onClick={()=> dispatch('finance manager')}>Finance Manager</button>

    </div>
  )
}

export default Counter2
