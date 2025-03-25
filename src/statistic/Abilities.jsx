import Ability from "./Ability.jsx"
import { abilities } from "../../data.js"
import { useState, useEffect } from "react";

function Abilities() {
    const [data, setData] = new useState(() => { 
        const savedData = localStorage.getItem("abilities");
        return savedData ? JSON.parse(savedData) : localStorage.setItem("abilities", JSON.stringify(abilities)); 
    });

    useEffect(() => {
        localStorage.setItem("abilities", JSON.stringify(data));    
    }, [data]);

    const updateAbility = (id2, newScore) => {
        setData(prevData => 
            prevData.map(ability => 
                ability.id === id2 ? { ...ability, score: newScore } : ability
            )
        );
    }

    return (
        <>
            {data.map((e) => (<Ability key={e.id} id={e.id} title={e.title} score={e.score} updateAbility={updateAbility}/>))}
        </>
    )
}

export default Abilities