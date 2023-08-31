'use client'
import NextPage from "@/components/NextPage/NextPage";
import styles from "@/app/portfolio/portfolio.module.scss";
import {typeLines} from "@/components/Pages/Portfolio/PortfolioMain/type_lines";
import {motion, useAnimation} from "framer-motion";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import React, {useState} from "react";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {useContext} from "react";
import PortfolioPopup from "@/components/Pages/Portfolio/PortfolioPopup";
import { useSpring, animated, useChain } from '@react-spring/web';

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}

export default function Portfolio() {

    const { isPopupActive, setPopup } = useContext(DataDevelopContext);

    // const [ animateData, setAnimateData ] = useState(0)

    // const handleButtonClick = () => {
    //     // Увеличиваем значение на 1 при каждом нажатии кнопки
    //     setAnimateData(animateData + 50);
    // };

    function handlePopup () {
        console.log('true')
        setPopup(true)
    }

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 100,
            },
        })
    }

    return (
        <>
            <main className={`${styles.container} pt-[240px]`}>

                <div
                    className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh] `}
                    data-type-transition=""
                    aria-hidden="true"
                >
                    {
                        typeLines && typeLines.ru.map((item, index) => {
                            return <motion.div
                            //     animate={{
                            //     x: animateData, y: 0, scale: 1
                            // }}
                                initial={{
                                    x: 0
                                }}
                                animate={{
                                    x: 200
                                }}
                                key={ index }  className="type__line select-none">{ item }</motion.div>
                        })
                    }

                </div>
                <animated.div
                    onClick={handleClick}
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs
                    }}
                />
                {/*<button onClick={handleButtonClick}>Click</button>*/}
                <div className={styles.wrapper}>
                    <PortfolioItems />
                    <div className="flex justify-end mt-[190px] mb-1.5 text-white underline hover:no-underline">
                        <button onClick={handlePopup}>Весь список работ</button>
                    </div>
                </div>
            </main>
            <NextPage url={'/contact'} image={`/img/portfolio/next-portfolio.webp`}></NextPage>
            <PortfolioPopup />
        </>
    );
}
