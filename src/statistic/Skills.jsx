import Skill from "./Skill"
import { skills } from "../../data"
import './Skill.css'

function Skills() {
    return (
        <div>
            {skills.map(x => <Skill key={x.id} {...x}/>)} 
        </div>
    )
}

export default Skills