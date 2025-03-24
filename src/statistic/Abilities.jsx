import Ability from "./Ability.jsx"
import { abilities } from "../../data.js"

// if (localStorage.getItem("abilities") == null) {
//     abilities = localStorage.setItem("abilties", JSON.stringify(abilities))
// } else {
//     abilities = JSON.parse(localStorage.getItem("abilities"))
// }

function Abilities() {
    return (
        <>
            {abilities.map((e) => <Ability key={e.id} {...e} />)}
        </>
    )
}

export default Abilities