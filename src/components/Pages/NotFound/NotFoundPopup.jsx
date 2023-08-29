'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Popup from "@/components/Popup/Popup";

export default function NotFoundPopup(props) {

    const [playStatus, setPlayStatus] = useState(false)

    return (
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
    );
}