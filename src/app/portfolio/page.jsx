'use client'
import NextPage from "@/components/NextPage/NextPage";
import styles from "@/app/portfolio/portfolio.module.scss";
import {typeLines} from "@/components/Pages/Portfolio/PortfolioMain/type_lines";
import {motion, useAnimation} from "framer-motion";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import React, {useRef, useState} from "react";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {useContext} from "react";
import PortfolioPopup from "@/components/Pages/Portfolio/PortfolioPopup";
import {useSpring, animated, useChain, useSpringRef, useTransition, useSprings} from '@react-spring/web';

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}

export default function Portfolio() {

    const { isPopupActive, setPopup } = useContext(DataDevelopContext);

    function handlePopup () {
        console.log('true')
        setPopup(true)
    }

    // Анимация контейнера с текстовыми линиями
    const propsTypes = useSpring({
        from: { scale: 1, rotate: 0 },
        to: [
            { scale: 2.7, rotate: -90, },
        ],
        config: { duration: 700 },
        delay: 500,
    });

    // Подготовка delay значений для каждой текстовой линии
    const props = [];
    for(let i = 0; i < 15; i ++){
        props[i] = 300 + 50 * i;
    }

    const animatedProps = props.map((delayValue) => ({
        from: { x: 0 },
        to: { x: 20 },
        config: { duration: 800 },
        delay: delayValue,
    }));

    const animations = useSprings(
        animatedProps.length,
        animatedProps.map((animatedProp) => animatedProp)
    );

    const propsContent = useSpring({
        from: { y: 0, opacity: 1 },
        to: { y: 100, opacity: 0 },
        config: { duration: 800 },
        delay: 700,
    });

    return (
        <>
            <animated.div style={propsContent} className={`${styles.container} pt-[240px]`}>

                <animated.div
                    className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh]`}
                    data-type-transition=""
                    aria-hidden="true"
                    style={propsTypes}
                >
                    {animations.map((animation, index) => (
                        <animated.div key={index} style={{ transform: animation.x.interpolate((x) => `translateX(${x}px)`) }}>
                            {typeLines.ru[index]}
                        </animated.div>
                    ))}

                </animated.div>

                <div className={styles.wrapper}>
                    <PortfolioItems />
                    <div className="flex justify-end mt-[190px] mb-1.5 text-white underline hover:no-underline">
                        <button onClick={handlePopup}>Весь список работ</button>
                    </div>
                </div>
            </animated.div>
            <NextPage url={'/contact'} image={`/img/portfolio/next-portfolio.webp`}></NextPage>
            <PortfolioPopup />
        </>
    );
}
