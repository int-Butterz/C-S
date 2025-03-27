import { useState, useEffect} from 'react'
import { modCalc } from '../../data';
import { profBonus, skills } from '../../data';
const abilities = JSON.parse(localStorage.getItem("abilities"))
const profs = localStorage.getItem("profBonus") ? JSON.parse(localStorage.getItem("profBonus")) : localStorage.setItem("profBonus", JSON.stringify(profBonus))
const skill = localStorage.getItem("skills") ? JSON.parse(localStorage.getItem("skills")) : localStorage.setItem("skills", JSON.stringify(skills)); 
const level = localStorage.getItem("level")
console.log(skill)
function Skill({name, id, ability, hasProf, hasExp, updateSkill}) {
    const [prof, setProf] = new useState(hasProf ? loadProf() : 0);
    const mod = abilities.id === id ? modCalc(abilities.score) : 0;
    const [hasProf2, setHasProf] = new useState(skill.hasProf);
    const [hasExp2, setHasExp] = new useState(skill.hasExp);
    
    function loadProf() {
        if (level >= 17) {
            return profBonus[5];
        } else if (level >= 13) {
            return profBonus[4];
        } else if (level >= 9) {
            return profBonus[3];
        } else if (level >= 5) {
            return profBonus[2];
        } else if (level >= 1) {
            return profBonus[1];
        } else {
            return 0;
        }
    }

    useEffect(() => {
        updateSkill(id, hasProf2, hasExp2);
    }, [hasProf2, hasExp2]);
    

    function handleClick() {
        console.log("hasProf: " + hasProf)
        console.log("hasExp: " + hasExp)
        setProf((prevValue) => {
                if (hasProf2 == true && hasExp2 == true) {
                    setHasProf(false)
                    setHasExp(false)
                    return 0;
                } else if (hasProf2 == true && hasExp2 == false) {
                    setHasExp(true)
                    return prevValue * 2;
                } else if (hasProf2 == false && hasExp2 == false) {
                    setHasProf(true)
                    return loadProf();
                };
            }
        )
    }

    return (
        <div className='skill'>
            <button onClick={handleClick}></button>
            <p>{name}</p>
            <p>{mod + prof}</p>
        </div>
    )   
}

export default Skill