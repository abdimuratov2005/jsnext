'use client'
import {useState} from "react";
import Image from "next/image";

export default function Video() {
    const [playStatus, setPlayStatus] = useState(false)
    return (
        <section className='relative   m-auto'>
            {playStatus ?
                <div className={'m-auto max-w-[1280px] relative'}>
                    <Image onClick={() => setPlayStatus(false)} className={'z-20 absolute top-[5%] right-[15%] cursor-pointer'}
                           height={30} width={30} src={'/img/close.svg'} alt={'посмотреть видео кнопка'}></Image>
                    <video className="video w-screen h-full max-h-[530px]" autoPlay loop muted playsInline>
                        <source src='/video/promo-mapbiz.mp4' type="video/mp4"/>
                    </video>
                </div>
                :
                <div className={'m-auto max-w-[1280px] relative'}>
                    <Image onClick={() => setPlayStatus(true)} className={'absolute bottom-[10%] left-[10%] cursor-pointer'}
                           height={60} width={60} src={'/img/play.svg'} alt={'посмотреть видео кнопка'}></Image>
                    <Image className={'m-auto'} height={530} width={1280} src={`/img/videooooo.jpg`}
                           alt={'Видео о MapBiz - создание и продвжиение сайтов'}></Image>
                </div>}

        </section>

    )
}