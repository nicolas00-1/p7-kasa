import { useState } from "react";

function Collapse ({label, description}) {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__label">{label}</div>
                {isHidden ? 
                    (<div onClick={()=>setIsHidden(false)} className="collapse__header__icon">/</div>)
                    : 
                    (<div onClick={()=>setIsHidden(true)} className="collapse__header__icon">\</div>)}
            </div>
            {!isHidden && 
            <div className="collapse__description">{description}</div>}
        </div>
    )
}

export default Collapse 