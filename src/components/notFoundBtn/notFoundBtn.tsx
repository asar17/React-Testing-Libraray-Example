import React,{useState} from 'react'
type NotFoundBtnPropsType={
    skills: string[]
}
const NotFoundBtn = ({skills}:NotFoundBtnPropsType) =>{
    const [isLog,setIsLog]=useState(false)
    return(
        <>
         <ul>
            {skills.map((skill)=>{
                return(
                    <li>
                        {skill}
                    </li>
                )
            })}
         </ul>
         {isLog ? (
            <button onClick={()=>{setIsLog(false)}}>logout</button>
         ):(
           <button onClick={()=>{setIsLog(true)}}>login</button>
         )}
        </>
    )
}
export default NotFoundBtn