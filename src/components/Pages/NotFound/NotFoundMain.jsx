'use client'
import React, {useContext} from 'react';
import {moviePlayBlack} from "@/components/SVGs/svgs";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";

export default function NotFoundMain(props) {

    const { setPopup } = useContext(DataDevelopContext);

    function handlePopup () {
        setPopup(prevState => !prevState)
    }

    return (
        <main className="h-screen flex justify-center items-center bg-darkgrey-mapbiz">
            <div className="intro max-w-screen-xl w-full pt-40 pb-40 px-8 2xl:px-0 flex flex-wrap md:flex-nowrap justify-between items-center">
                <div className="intro-title header-change w-full md:w-6/12 grid font-grotesk-bold text-2xl md:text-4xl 2xl:text-[4.125rem] md:leading-[3.5rem] 2xl:leading-[6.25rem] font-bold text-whitetext-mapbiz">
                    <h1>Страница не найдена Ошибка 404</h1>
                </div>
                <div className="intro-img w-full md:w-6/12 pl-10 relative">
                    <div className="h-[600px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/img/404/404-img.png)' }}></div>
                    <button onClick={handlePopup} className="intro-youtube absolute left-48 bottom-40 cursor-pointer select-none animate-blink-base-mapbiz">
                        {moviePlayBlack}
                    </button>
                </div>
            </div>
        </main>
    );
}