import React,{useState,useEffect} from 'react'
import {NotFoundBtnPropsType} from './notFoundBtn.type'
const NotFoundBtn = ({items}:NotFoundBtnPropsType) =>{
    useEffect(()=>{
       setInterval(()=>{
             setIsLog(true)
       },500)
    },[])
    const [isLog,setIsLog]=useState(false)
    return(
        <>
         <ul>
            {items?.map((item)=>{
                return(
                    <li key={item}>
                        {item}
                    </li>
                )
            })}
         </ul>
         {isLog ? (
            <button onClick={()=>{setIsLog(false)}}>logout</button>
         ):(
           <button >login</button>
         )}
        </>
    )
}
export default NotFoundBtn