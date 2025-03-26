import { useState, useEffect } from 'react'
import { profBonus } from '../../data';

function Level() {
    const [level, setLevel] = new useState(() => {
        const savedData = localStorage.getItem("level");
        return savedData ? Number.parseInt(savedData) : localStorage.setItem("level", 1); 
    });

    useEffect(() => {
        localStorage.setItem("level", level)
    }, [level])

    function increase() {
        setLevel(prevScore => {
                return (prevScore + 1 > 20) ? prevScore : prevScore + 1;
            }
        )
    }
    
    function reduce() {
        setLevel(prevScore => {
                return (prevScore - 1 < 1) ? prevScore : prevScore - 1;
            }
        )   
    }

    return (
        <div className='box'>
            <p>Level</p>
            <button className='button' onClick={reduce}>-</button>
            {level}
            <button className='button' onClick={increase}>+</button>
        </div>
    )
}

export default Level