import React from 'react'
import {SkillsPropsTypes} from './skills.type'
const Skills = ({skills}:SkillsPropsTypes) =>{
    return(
        <div>
            <ul>
                {skills?.map((skill)=>{
                    return(
                        <li>
                           {skill}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default  Skills