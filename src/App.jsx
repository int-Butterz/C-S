import { useState, useEffect, createContext } from 'react'
import './App.css'
import Stats from './statistic/Stats'
import Info from './info/Info'

import { skills } from '../data'
import { abilities } from '../data'

export const AbilityContext = createContext();
export const SkillContext = createContext();

function App() {
  //Skills
  const [skillData, setSkillData] = new useState(() => { 
    const savedData = localStorage.getItem("skills");
    return savedData ? JSON.parse(savedData) : localStorage.setItem("skills", JSON.stringify(skills)); 
  });

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skillData));    
  }, [skillData]);

  const updateSkill = (id2, val1, val2) => {
    setSkillData(prevData => 
        prevData.map(skill => 
            skill.id === id2 ? { ...skill, hasProf: val1, hasExp: val2} : skill
        )
    );
  }

  //Abilities
  const [abilityData, setAbilityData] = new useState(() => { 
    const savedData = localStorage.getItem("abilities");
    return savedData ? JSON.parse(savedData) : localStorage.setItem("abilities", JSON.stringify(abilities)); 
  });

  useEffect(() => {
      localStorage.setItem("abilities", JSON.stringify(abilityData));    
  }, [abilityData]);

  const updateAbility = (id2, newScore) => {
      setAbilityData(prevData => 
          prevData.map(ability => 
              ability.id === id2 ? { ...ability, score: newScore } : ability
          )
      );
  }

  return (
    <>
      <Info />
      <AbilityContext.Provider value={abilityData}>
        <Stats abilityData={abilityData} updateAbility={updateAbility} skillData={skillData} updateSkill={updateSkill}/>
      </AbilityContext.Provider>
    </>
  )
}

export default App
