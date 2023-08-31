'use client'
import styles from "@/app/portfolio/portfolio.module.scss";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import {block} from "@/components/Pages/Develop/DevelopSkills/develop";

export default function PortfolioItems() {

    const [data, setData] = useState([]);

    async function getPortfolio() {
        const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
        try {
            const res = await axios.get(url);
            setData(res.data.fields.content[0].els);
            return res.data.fields.content[0].els.map((link) => {
                return link
            });

        } catch (error) {
            console.log(error);
            return [];
        }
    }

    useEffect(() => {
        getPortfolio()
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.portfolio__title}>Портфолио</h1>
            <div className='flex justify-center'>
                <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                    return (
                        //href={`/portfolio/${item.link}`}
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

        </div>
    );
}
