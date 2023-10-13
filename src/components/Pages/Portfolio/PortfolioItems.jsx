'use client'
import styles from "@/app/portfolio/portfolio.module.scss";
import Link from "next/link";
import Image from "next/image";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {useContext} from "react";


export default function PortfolioItems({data}) {

    const { isPopupActive, setPopup } = useContext(DataDevelopContext);

    function handlePopup () {
        setPopup(!isPopupActive);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.portfolio__title}>Портфолио</h1>
            <div className='flex justify-center'>
                <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                    return (
                        <Link href={`/portfolio/${item.link}`} className={`${styles.portfolio__item} `}
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
    );
}