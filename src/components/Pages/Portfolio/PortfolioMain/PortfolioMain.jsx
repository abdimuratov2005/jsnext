'use client'
import styles from "@/app/portfolio/portfolio.module.scss";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import React, {useRef, useState} from "react";
import {typeLines} from "@/components/Pages/Portfolio/PortfolioMain/type_lines";
import {useSpring, animated, useSprings} from '@react-spring/web';

export default function PortfolioMain({data}) {

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
        <main className={`${styles.container} pt-[240px]`}>
            <animated.div className={{}} style={propsContent}>

                <animated.div
                    className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh] `}
                    data-type-transition=""
                    aria-hidden="true"
                    style={propsTypes}
                >
                    {
                        typeLines && typeLines.ru.map((item, index) => {
                            return <div key={index}  className="type__line select-none">{ item }</div>
                        })
                    }

                </animated.div>
                <div className={styles.wrapper}>
                    <PortfolioItems data={data} />
                </div>

            </animated.div>

        </main>
    );
}