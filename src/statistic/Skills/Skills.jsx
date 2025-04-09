import Skill from "./Skill"
import './Skill.css'
import './Skills.css'

function Skills(props) {
    return (
        <div className='box' id='skills'>
            <p className='sectionTitle'>Skills</p>
            {props.data.map(x => <Skill key={x.id} {...x} updateSkill={props.updateSkill}/>)} 
        </div>
    )
}

export default Skills