'use client'
import styles from "@/app/portfolio/portfolio.module.scss";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import React, { useState } from "react";
import { typeLines } from "@/components/Pages/Portfolio/PortfolioMain/type_lines";
import { motion, useAnimation } from 'framer-motion';

export default function PortfolioMain({ data }) {
    const [click, setClick] = useState(false);
    const controls = useAnimation();

    const startAnimation = async () => {
        await controls.start({ scale: 2.7, rotate: -90, transition: { duration: 0.7 } });
        await controls.start({ y: 100, opacity: 0, transition: { duration: 0.8, delay: 0.7 } });
    };

    return (
        <main className={`${styles.container} overflow-hidden pt-[240px]`} onClick={startAnimation}>
            <motion.div className="overflow-hidden" animate={controls}>
                <motion.div
                    className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh] `}
                    data-type-transition=""
                    aria-hidden="true"
                    initial={{ scale: 1, rotate: 0 }}
                >
                    {typeLines.ru.map((item, index) => (
                        <motion.div key={index} style={{ x: 20 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.3 + index * 0.05 }}>
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
                <div className={styles.wrapper}>
                    <PortfolioItems data={data} />
                </div>
            </motion.div>
        </main>
    );
}