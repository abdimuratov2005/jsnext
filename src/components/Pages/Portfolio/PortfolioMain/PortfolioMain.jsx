'use client'
import styles from "@/app/portfolio/portfolio.module.scss";
import React, {useContext, useState} from "react";
import { typeLines } from "@/components/Pages/Portfolio/PortfolioMain/type_lines";
import { motion, useAnimation } from 'framer-motion';
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";




export default  function PortfolioMain({ data }) {
    const router = useRouter()
    console.log(router)
    const [click, setClick] = useState(false);
    const controls = useAnimation();

    const { isPopupActive, setPopup } = useContext(DataDevelopContext);

    function handlePopup (e) {

        setPopup(!isPopupActive);
    }



    const startAnimation = async (e, link) => {
        e.preventDefault()
        console.log(e)
        await controls.start({ scale: 2.7, rotate: -90, transition: { duration: 0.7 } });
        await controls.start({ y: 100, opacity: 0, transition: { duration: 0.8, delay: 0.7 } });
        router.push(`/portfolio/${link}`)

    };

    return (
        <main className={`${styles.container} overflow-hidden pt-[240px]`} >
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
                    <h1 className={styles.portfolio__title}>Портфолио</h1>
                    <div className='flex justify-center'>
                        <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                            return (
                                <Link onClick={(e) => {
                                    startAnimation(e, item.link)
                                }} href={`/portfolio/${item.link}`} className={`${styles.portfolio__item} `}
                                      key={item.link}>
                                    <Image width={290} height={217} className={styles.portfolio__image} src={item.img} alt=""/>
                                    <h2 className={`${styles.portfolio__text} min-h-[45px]`}>{item.title}</h2>
                                    <div className='flex justify-end mt-2'>
                                        <button className={styles.portfolio__link}>Посмотреть</button>
                                    </div>
                                </Link>
                            )
                        })}
                        </div>
                    </div>
                    <div className="flex justify-end mt-[190px] mb-1.5 text-white underline hover:no-underline">
                        <button onClick={handlePopup}>Весь список работ</button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}