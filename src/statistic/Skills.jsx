import { useState, useEffect} from 'react'
import Skill from "./Skill"
import { skills } from "../../data"
import './Skill.css'
import './Skills.css'

function Skills(props) {
    // const [data, setData] = new useState(() => { 
    //     const savedData = localStorage.getItem("skills");
    //     return savedData ? JSON.parse(savedData) : localStorage.setItem("skills", JSON.stringify(skills)); 
    // });

    // useEffect(() => {
    //     localStorage.setItem("skills", JSON.stringify(data));    
    // }, [data]);

    // const updateSkill = (id2, val1, val2) => {
    //     setData(prevData => 
    //         prevData.map(skill => 
    //             skill.id === id2 ? { ...skill, hasProf: val1, hasExp: val2} : skill
    //         )
    //     );
    // }

    return (
        <div className='box' id='skills'>
            <p className='sectionTitle'>Skills</p>
            {props.data.map(x => <Skill key={x.id} {...x} updateSkill={props.updateSkill}/>)} 
        </div>
    )
}

export default Skills