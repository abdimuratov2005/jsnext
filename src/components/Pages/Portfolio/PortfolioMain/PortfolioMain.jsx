'use client'
import React from 'react';
import styles from "@/app/portfolio/portfolio.module.scss";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import {typeLines} from "@/components/Pages/Portfolio/PortfolioMain/type_lines";

export default async function PortfolioMain({data}) {

    return (
        <main className={`${styles.container} pt-[240px]`}>
            <div
                className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh] `}
                data-type-transition=""
                aria-hidden="true"
            >
                {
                    typeLines && typeLines.ru.map((item, index) => {
                        return <div key={index}  className="type__line select-none">{ item }</div>
                    })
                }

            </div>
            <div className={styles.wrapper}>
                <PortfolioItems data={data} />
            </div>

        </main>
    );
}