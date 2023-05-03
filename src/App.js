import './App.css';
import React from 'react'
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ComponnetC from './components/ComponnetC';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter4 from './components/HookCounter4';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
// import HookCounter3 from './components/HookCounter3'
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
export const AuthorContext=React.createContext()
function App() {
  return (
    <div className="App">
{/* <HookCounter/>
<HookCounter2/> */}
{/* <HookCounter3/> */}
{/* <HookCounter4/> */}
{/* <ClassCounterOne/> */}
{/* <HookCounterOne/> */}
{/* <ClassMouse/> */}
{/* <HookMouse/> */}
{/* <MouseContainer/> */}
{/* <IntervalClassCounter/>
<IntervalHookCounter/> */}
{/* <DataFetching/> */}
<UserContext.Provider value={'pia'}> 
<ChannelContext.Provider value={'dreamy tech'}>
  <AuthorContext.Provider value={'vina'}> <ComponnetC/></AuthorContext.Provider>
 </ChannelContext.Provider>

</UserContext.Provider>
<Counter1/>
<Counter2/>
<Counter3/>
<Counter4/>
<Counter5/>
    </div>
  );
}

export default App;
