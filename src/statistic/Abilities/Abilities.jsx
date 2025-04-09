import Ability from "./Ability.jsx"
import './Abilities.css'

function Abilities(props) {
    return (
        <div className='box' id='abilities'>
            <p className="sectionTitle">Abilities</p>
            {props.data.map((e) => (<Ability key={e.id} id={e.id} title={e.title} score={e.score} updateAbility={props.updateAbility}/>))}
        </div>
    )
}

export default Abilities