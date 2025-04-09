import Abilities from "./Abilities/Abilities.jsx"
import Saves from "./Saves/Saves.jsx"
import Skills from "./Skills/Skills.jsx"
import './Stats.css'

function Stats(props) {
    return (
        <div id='stats'>
            <Abilities data={props.abilityData} updateAbility={props.updateAbility}/>
            <Saves />
            <Skills data={props.skillData} updateSkill={props.updateSkill}/>
        </div>
    )
}

export default Stats