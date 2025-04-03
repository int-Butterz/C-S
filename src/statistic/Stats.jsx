import Abilities from "./Abilities.jsx"
import Saves from "./Saves.jsx"
import Skills from "./Skills"
import './Stats.css'

function Stats() {
    return (
        <div id='stats'>
            <Abilities />
            <Saves />
            <Skills />
        </div>
    )
}

export default Stats