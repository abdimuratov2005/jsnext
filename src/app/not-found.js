'use client'
import Popup from "@/components/Popup/Popup";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import React, {useContext, useState} from "react";
import {moviePlayBlack} from "@/components/SVGs/svgs";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {

    const [playStatus, setPlayStatus] = useState(false)

    const { setPopup } = useContext(DataDevelopContext);

    function handlePopup () {
        setPopup(prevState => !prevState)
    }

    return <>
        <div className="flex justify-center items-center bg-darkgrey-mapbiz">
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
        </div>
        <Popup>
            {playStatus ?
                <div className="w-full h-full">
                    <div className={'relative'}>
                        <Image onClick={() => setPlayStatus(false)} className={'z-20 absolute right-3 top-3 cursor-pointer'} height={30} width={30} src={'/img/close.svg'} alt={'посмотреть видео кнопка'}></Image>
                        <video className={`video w-full h-full object-cover rounded-[10px]`} autoPlay loop muted playsInline>
                            <source src={'/video/404.mp4'} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                :
                <div className="w-full h-full bg-darkgrey-mapbiz">
                    <div className={'relative w-full h-full'}>

                        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                            <span className="text-4xl font-bold text-white tracking-[4px]">404</span>
                            <Image onClick={() => setPlayStatus(true)} className={'cursor-pointer'} height={60} width={60} src={'/img/play.svg'} alt={'посмотреть видео кнопка'}></Image>
                        </div>
                    </div>
                </div>
            }
        </Popup>

    </>
}