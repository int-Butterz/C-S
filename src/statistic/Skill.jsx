import { useState, useEffect} from 'react'
import { modCalc } from '../../data';
import { profBonus } from '../../data';
const abilities = JSON.parse(localStorage.getItem("abilities"))
const profs = localStorage.getItem("profBonus") ? JSON.parse(localStorage.getItem("profBonus")) : localStorage.setItem("profBonus", JSON.stringify(profBonus))

function Skill({name, id}) {
    const [prof, setProf] = new useState(0);
    const mod = abilities.id === id ? modCalc(abilities.score) : 0;
    
    function setProfBon() {
        setProf(() => {
                const level = localStorage.getItem("level")
                if (level >= 17) {
                    return profBonus[5];
                } else if (level >= 13) {
                    return profBonus[4];
                } else if (level >= 9) {
                    return profBonus[3];
                } else if (level >= 5) {
                    return profBonus[2];
                } else {
                    return profBonus[1];
                }
            }   
        )
    }

    function setExpertise() {
            setProf(prevValue => {
                return prevValue * 2;
            }
        )
    }

    function reset() {
        setProf(prevValue => prevValue = 0);
    }

    return (
        <div className='skill'>
            <button onClick={setProfBon} onDoubleClick={setExpertise} onMouseDown={reset}></button>
            <p>{name}</p>
            <p>{mod + prof}</p>
        </div>
    )   
}

export default Skill