import Ability from "./Ability.jsx"

const abilities = [
    {
        title: 'Strength',
        score: 10,
    },
    {
        title: 'Dexterity',
        score: 10,
    },
    {
        title: 'Constitution',
        score: 10,
    },
    {
        title: 'Intelligence',
        score: 10,
    },
    {
        title: 'Wisdom',
        score: 10,
    },
    {
        title: 'Charisma',
        score: 10,
    }
]

if (localStorage.getItem("abilities") == null) {
    abilities = localStorage.setItem("abilties", JSON.stringify(abilities))
} else {
    abilities = JSON.parse(localStorage.getItem("abilities"))
}
abilities = ()
function Abilities() {
    return (
        <>
            {abilities.map((e) => <Ability title={e.title} score={e.score} />)}
        </>
    )
}

export default Abilities