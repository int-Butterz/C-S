import { useState, useEffect} from 'react'
import { modCalc } from '../../data';
import { profBonus, abilities } from '../../data';
const abilities2 = JSON.parse(localStorage.getItem("abilities"))
// const profs = localStorage.getItem("profBonus") ? JSON.parse(localStorage.getItem("profBonus")) : localStorage.setItem("profBonus", JSON.stringify(profBonus))
// const skill = localStorage.getItem("skills") ? JSON.parse(localStorage.getItem("skills")) : localStorage.setItem("skills", JSON.stringify(skills)); 
const level = localStorage.getItem("level")

function Skill({name, id, ability, hasProf, hasExp, updateSkill}) {
    const [mod, setMod] = new useState(() => {return abilities.id == ability ? 1 : 0});
    const [hasProf2, setHasProf] = new useState(hasProf);
    const [hasExp2, setHasExp] = new useState(hasExp);
    const [bonus, setBonus] = new useState(hasProf2 == true ? loadProf() : 0);
    
    function loadProf() {
        console.log(mod)
        if (level >= 17) {
            return hasExp2 ? profBonus[5] * 2: profBonus[5];
        } else if (level >= 13) {
            return hasExp2 ? profBonus[4] * 2: profBonus[4];
        } else if (level >= 9) {
            return hasExp2 ? profBonus[3] * 2: profBonus[3];
        } else if (level >= 5) {
            return hasExp2 ? profBonus[2] * 2: profBonus[2];
        } else if (level >= 1) {
            return hasExp2 ? profBonus[1] * 2: profBonus[1];
        } else {
            return 0;
        }
    }

    useEffect(() => {
        console.log("updated")
        updateSkill(id, hasProf2, hasExp2);
    }, [hasProf2, hasExp2]);
    

    function handleClick() {
        console.log("hasProf: " + hasProf2)
        console.log("hasExp: " + hasExp2)
        setBonus((prevValue) => {
                if (hasProf2 == true && hasExp2 == true) {
                    setHasProf(false)
                    setHasExp(false)
                    prevValue = 0;
                    return prevValue;
                } else if (hasProf2 == true && hasExp2 == false) {
                    setHasExp(true)
                    return prevValue * 2;
                } else if (hasProf2 == false && hasExp2 == false) {
                    setHasProf(true)
                    prevValue = loadProf();
                    return prevValue;
                };
            }
        )
    }

    return (
        <div className='skill'>
            <button onClick={handleClick}></button>
            <p>{name}</p>
            <p>{mod + bonus}</p>
        </div>
    )   
}

export default Skill