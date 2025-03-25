import { useState, useEffect } from 'react'

function Ability(props = []) {
    const [score, setScore] = new useState(props.score);
    const [mod, setMod] = new useState(modCalc(props.score));

    useEffect(() => {
        setMod(modCalc(score));
    }, [score]);

    function increase() {
        setScore(x => x + 1);
    }
    
    function reduce() {
        setScore(x => x - 1);
    }
    
    function modCalc(x) {
        return Math.floor((x-10)/2)
    }

    return (
        <div>
            <p>{props.title}</p>
            <p>{mod}</p>
            <p>
                <button onClick={reduce}>-</button>
                {score}
                <button onClick={increase}>+</button>
            </p>
        </div>
    )
}

export default Ability