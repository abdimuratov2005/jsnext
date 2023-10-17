'use client'
import {useRef, useState} from "react";
import Image from "next/image";
import styles from "./Video.module.scss"




export default function Video() {


    const [open, setOpen] = useState(false)
    const videoRef = useRef(null);
    const [isPlayed, setIsPlayed] = useState(false)
    const handleClick = () => {
        const video = videoRef.current;
        if(video.muted === false && video.paused) {
            setIsPlayed(true)
            video.play()
        } else if (video.muted === false && video.played) {
            video.pause();
            setIsPlayed(false)
        }
        else  {
            setIsPlayed(true)
            video.currentTime = 0;
            video.muted = false;
            video.play();
        }
    };

    return (
        <section className='relative  m-auto'>
                <div  onMouseLeave={() => {
                    setOpen(!open)
                }}
                      onMouseEnter={() => setOpen(!open)} onClick={handleClick}  className={`m-auto relative ${isPlayed ? 'cursor-mapbiz-pay' : 'cursor-mapbiz-stop'}  ${!isPlayed && styles.video}`}>
                    <video ref={videoRef} className={`video w-screen h-full  `} autoPlay loop muted playsInline>
                        <source src='/video/banner.mp4' type="video/mp4"/>
                    </video>
                </div>
        </section>

    )
}