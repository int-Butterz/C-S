import Ability from "./Ability.jsx"
import { abilities } from "../../data.js"
import { useState, useEffect } from "react";

function Abilities() {
    const [data] = new useState(() => { 
        const savedData = localStorage.getItem("abilities");
        return savedData ? JSON.parse(savedData) : abilities; 
    });

    useEffect(() => {
        localStorage.setItem("abilties", JSON.stringify(data));    
    }, [data]);

    return (
        <>
            {data.map((e) => <Ability key={e.id} {...e} />)}
        </>
    )
}

export default Abilities