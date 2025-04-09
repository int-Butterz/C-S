import { useState, useEffect} from 'react'
import { modCalc, sign } from '../../../data';
import { profBonus } from '../../../data';

import icon_base from "../../assets/skills_icons/icon_base.png"
import icon_proficient from "../../assets/skills_icons/icon_proficient.png"
import icon_expert from "../../assets/skills_icons/icon_expert.png"

const abilityList = JSON.parse(localStorage.getItem("abilities"));
const level = localStorage.getItem("level")

function Skill({name, id, ability, hasProf, hasExp, updateSkill}) {
    const [mod, setMod] = useState(() => {
        return modCalc(abilityList[ability-1].score)
    });
    const [hasExpertise, setHasExpertise] = useState(hasExp);
    const [hasProficiency, setHasProficiency] = useState(hasProf);
    const [bonus, setBonus] = useState(hasProficiency == true ? loadProf() : 0);
    
    function loadProf() {
        if (level >= 17) {
            return hasExpertise ? profBonus[5] * 2: profBonus[5];
        } else if (level >= 13) {
            return hasExpertise ? profBonus[4] * 2: profBonus[4];
        } else if (level >= 9) {
            return hasExpertise ? profBonus[3] * 2: profBonus[3];
        } else if (level >= 5) {
            return hasExpertise ? profBonus[2] * 2: profBonus[2];
        } else if (level >= 1) {
            return hasExpertise ? profBonus[1] * 2: profBonus[1];
        } else {
            return 0;
        }
    }
    
    useEffect(() => {
        updateSkill(id, hasProficiency, hasExpertise);
    }, [hasProficiency, hasExpertise]);
    
    
    function handleClick() {
        setBonus((prevValue) => {
            if (hasProficiency == true && hasExpertise == true) {
                setHasProficiency(false)
                setHasExpertise(false)

                prevValue = 0;
                return prevValue;
            } else if (hasProficiency == true && hasExpertise == false) {
                setHasExpertise(true)
                return prevValue * 2;
            } else if (hasProficiency == false && hasExpertise == false) {
                setHasProficiency(true)
                prevValue = loadProf();
                return prevValue;
            };
        }
    )
}

function abTag(ab) {
    let x = (abilityList[ab].title).slice(0, 3).toUpperCase()
    return ` (${x})`
}

function changeIcon() {
    if (!hasProficiency && !hasExpertise) {
        return icon_base
    } else if (hasProficiency && !hasExpertise) {
        return icon_proficient
    } else {
        return icon_expert
    }
}

let icon = changeIcon();

return (
    <div className='skill'>
            <button className='skillButton' onClick={handleClick}>
                <img src={icon}/>
            </button>
            <div className='skillInfo'>
                <p className='skillTitle'>{name + abTag(ability-1)}</p>
                <p>{sign(mod + bonus)}</p>
            </div>
        </div>
    )   
}

export default Skill