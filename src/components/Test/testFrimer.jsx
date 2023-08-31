'use client'
import React, {useState} from 'react';
import {useScroll, motion, useMotionValueEvent, useSpring} from "framer-motion";

export default function TestFrimer(props) {

    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress)

    const [scrollData, setScrollData] = useState(0)

    const [dataAnimate, setDataAnimate] = useState(0)


    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    //     setScrollData(latest)
    // })

    useMotionValueEvent(scaleX, "change", (latest) => {
        console.log("Page scroll: ", latest)
        setScrollData(latest)
    })



    return (
        <>
            <motion.div
                className="fixed bottom-0 left-0 w-full h-[10px] bg-green-500"
                style={{ width: scrollData * 100 + '%' }}
                // style={{ scaleX }}
            >
            </motion.div>
            <div className="flex justify-center items-center h-[2400px]">
                <button onClick={() => setDataAnimate(200)}>Кнопка</button>
                <motion.div animate={{
                    x: dataAnimate, y: 0, scale: 1
                }}>Text</motion.div>
            </div>

        </>

    );
}