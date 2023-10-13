import React from 'react';
import styles from "@/app/portfolio/portfolio.module.scss";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";
import axios from "axios";
import {typeLines} from "@/components/Pages/Portfolio/PortfolioMain/type_lines";

async function getPortfolio() {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
    try {
        const res = await axios.get(url);
        return res.data.fields.content[0].els.map((link) => {
            return link
        });

    } catch (error) {
        console.log(error);
        return [];
    }
}

export default async function PortfolioMain(props) {

    const data = await getPortfolio();

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