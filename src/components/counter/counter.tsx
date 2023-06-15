import React,{useState} from 'react'
const Counter = () =>{
    const [counter,setCounter]=useState(0)
    return(
        <div>
            <h1>counter is {counter}</h1> <br/>
            <button onDoubleClick={()=>setCounter(counter+1)}>Increment</button>
            <button onPointerDown={()=>setCounter(counter+2)}>mouse-left</button>
        </div>
    )
}
export default Counter;