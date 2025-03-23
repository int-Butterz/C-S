import { useState } from 'react'

function Ability(props) {
    const [score, setScore] = new useState(props.score);

    function reduce() {
        setScore(x => x - 1)
    }

    function increase() {
        setScore(x => x + 1)
    }

    function mod() {
        return Math.floor(x => (x-10)/2)
    }
    console.log(mod)
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