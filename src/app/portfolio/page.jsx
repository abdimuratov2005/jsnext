import axios from "axios";
import Link from "next/link";
import styles from './portfolio.module.scss'
import NextPage from "@/components/NextPage/NextPage";
import PortfolioItems from "@/components/Pages/Portfolio/PortfolioItems";

async function getPortfolio() {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
    try {
        const res = await axios.get(url);
        return res.data.fields.content[0].els.map((link) => {
            return link
        });

    } catch (error) {
        console.log(error);
        return []; // или возвратите пустой массив в случае ошибки
    }
}

export const metadata = {
    title: 'MapBiz - Portfolio',
    description: 'MapBiz - Portfolio',
}

export default async function Portfolio() {
    const data = await getPortfolio();
    return (
        <section className={styles.container}>
            <div
                className={`${styles.type} fixed h-screen w-screen lowercase flex flex-col justify-center items-center text-center font-grotesk text-whitetype-mapbiz mt-[20vh] `}
                data-type-transition=""
                aria-hidden="true"
            >
                <div className="type__line select-none">развиваемся, приносим пользу, вызываем</div>
                <div className="type__line select-none">интерес, делаем интернет красивее,</div>
                <div className="type__line select-none">дизайн вызывающий эмоции, работаем,</div>
                <div className="type__line select-none">кайфуем, творим, достигаем, развиваемся,</div>
                <div className="type__line select-none">приносим пользу, вызываем интерес,</div>
                <div className="type__line select-none">делаем интернет красивее, дизайн</div>
                <div className="type__line select-none">вызывающий эмоции, работаем, кайфуем,</div>
                <div className="type__line select-none">творим, пользу, вызываем интерес, делаем</div>
                <div className="type__line select-none">интернет красивее, дизайн вызывающий</div>
                <div className="type__line select-none">интернет красивее, дизайн вызывающий</div>
                <div className="type__line select-none">эмоции, работаем, кайфуем, творим,</div>
                <div className="type__line select-none">достигаем, развиваемся, приносим пользу,</div>
                <div className="type__line select-none">вызываем интерес, делаем интернет</div>
                <div className="type__line select-none">красивее, дизайн вызывающий эмоции,</div>
                <div className="type__line select-none">могём, хотим</div>

            </div>
            <div className={styles.wrapper}>
                <PortfolioItems data={data} />
            </div>
            <NextPage url={'/contact'}></NextPage>
        </section>
    );
}
