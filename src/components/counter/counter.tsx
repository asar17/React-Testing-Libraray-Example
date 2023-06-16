import React,{useState} from 'react'
const Counter = () =>{
    const [counter,setCounter]=useState(0)
    const [amount,setAmount]=useState(10)
    return(
        <div>
            {/* test pointer interactions */}
            <h1>counter is {counter}</h1> <br/>
            <button onDoubleClick={()=>setCounter(counter+1)}>Increment</button>
            <button onPointerDown={()=>setCounter(counter+2)}>mouse-left</button>

            <input type="number" value={amount} onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
            <button onClick={()=>{setCounter(amount)}}>change counter by amount value</button>
        </div>
    )
}
export default Counter;