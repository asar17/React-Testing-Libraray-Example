import React,{useState} from 'react';
import Greet from './components/greet/greet';
import Application from './components/application/application';
import Skills from './components/skills/skills';
import NotFoundBtn from './components/notFoundBtn/notFoundBtn';
import Counter from './components/counter/counter';
import Wrapper from './components/wrapper/wrapper';
import WrapperChild from './components/wrapper/wrapperChild/wrapperChild';
import {useCounter} from './components/hooks/use-counter/useCounter'
import CounterTwo from './components/mockiingCounter/CounterTwo'






const App = () => {
  //const {count,incre,decre}=useCounter();
  const [count,setCount]=useState(0)
  return(
        <div>
          {/* <Greet/> */}
          {/* <Application/> */}
          {/* <Skills/> */}
          {/* <NotFoundBtn items={['athar','mohamed','elhaidary']}/> */}
          {/* <Counter /> */}
          {/* <Wrapper>
            <WrapperChild/>
          </Wrapper> */}
{/* 
          <h3>counter by useCounter hook</h3>
           {count}
          <button onClick={()=>{incre()}}>increment</button>
          <button onClick={()=>{decre()}}>decrement</button>   */}

          <CounterTwo counter={count}incre={()=>setCount(count+10)} />



        </div>
      )
};

export default App;
