 import React,{useState} from 'react'
  type CounterPropsType ={
    initialCounter?:number;
 

  }
 export const useCounter = ({initialCounter=0}:CounterPropsType ={}) =>{
    const [count,setCount]=useState(initialCounter)
    const incre = () =>{
        setCount(count+1)
    }
    const decre = () =>{
        setCount(count-1)
    }

    return {count,incre,decre}
 }
 
 