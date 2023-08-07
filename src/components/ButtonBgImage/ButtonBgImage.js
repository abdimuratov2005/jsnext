'use client'
import React, {useState} from "react";

export default function ButtonBgImage({isValid, text, click, type}) {
    const [hoverBtn, setHoverBtn] = useState(false)
    const hoverBtnChange = () => setHoverBtn(!hoverBtn);


    return (
        <button
            onClick={click}
            disabled={isValid ? !isValid : false} // Измененное условие здесь
            onMouseEnter={hoverBtnChange}
            onMouseLeave={hoverBtnChange} type={type}
            className={`${isValid === true ? '' :'cursor-not-allowed'} py-3 px-10 border ${hoverBtn ? ' bg-btn-fone-hover border-crimsondark-mapbiz shadow-neon-mapbiz' : 'bg-btn-fone border-white'}  rounded-[24px] text-white transition-all duration-300`}>{text}
        </button>
    )
}