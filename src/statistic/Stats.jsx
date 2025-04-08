import Abilities from "./Abilities.jsx"
import Saves from "./Saves.jsx"
import Skills from "./Skills"
import './Stats.css'

function Stats(props) {
    return (
        <div id='stats'>
            <Abilities updateAbility={props.updateAbility}/>
            <Saves />
            <Skills updateSkill={props.updateSkill}/>
        </div>
    )
}

export default Stats