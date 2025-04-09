import { useState, useEffect } from 'react'
import { modCalc, sign } from '../../../data';
import './Ability.css'

function Ability({id, title, score, updateAbility}) {
    const [abScore, setAbScore] = useState(score);
    const [mod, setMod] = useState(modCalc(score));

    useEffect(() => {
        setMod(modCalc(abScore));
        updateAbility(id, abScore);
    }, [abScore]);

    function increase() {
        setAbScore(prevScore => {
                return (prevScore + 1 > 30) ? prevScore : prevScore + 1;
            }
        )
    }
    
    function reduce() {
        setAbScore(prevScore => {
                return (prevScore - 1 < 0) ? prevScore : prevScore - 1;
            }
        )   
    }

    return (
        <div id='abScore'>
            <p className='abScore-e' id='title'>{title}</p>
            <p className='abScore-e' id='modifier'>{sign(mod)}</p>
            <p className='abScore-e' id='score'>
                <button className='button' onClick={reduce}>-</button>
                {abScore}
                <button className='button' onClick={increase}>+</button>
            </p>
        </div>
    )
}

export default Ability