import { useState, useEffect } from 'react'
import { modCalc, sign } from '../../../data';
import { profBonus } from '../../../data';
import Icon from './Icon';

const abilityList = JSON.parse(localStorage.getItem("abilities"));
const level = localStorage.getItem("level")

import { useContext } from 'react';
import { AbilityContext } from '../../App';

function Skill({name, id, ability, hasProf, hasExp, updateSkill}) {
    const abilityContext = useContext(AbilityContext)
    
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
        })
    }

    function abTag(ab) {
        let x = (abilityList[ab].title).slice(0, 3).toUpperCase()
        return ` (${x})`
    } 

    return (
        <div className='skill'>
            <button className='skillButton' onClick={handleClick}>
                <Icon hasProficiency={hasProficiency} hasExpertise={hasExpertise} />
            </button>
            <div className='skillInfo'>
                <p className='skillTitle'>{name + abTag(ability-1)}</p>
                <p>{sign(modCalc(abilityContext[ability-1].score) + bonus)}</p>
            </div>
        </div>
    )       
}

export default Skill