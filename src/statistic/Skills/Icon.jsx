import icon_base from "../../assets/skills_icons/icon_base.png"
import icon_proficient from "../../assets/skills_icons/icon_proficient.png"
import icon_expert from "../../assets/skills_icons/icon_expert.png"


export default function Icon(props) {
    function changeIcon() {
        if (!props.hasProficiency && !props.hasExpertise) {
            return icon_base
        } else if (props.hasProficiency && !props.hasExpertise) {
            return icon_proficient
        } else {
            return icon_expert
        }
    }
    
    let icon = changeIcon();

    return (
        <>
            <img src={icon}/>
        </>
    )
}