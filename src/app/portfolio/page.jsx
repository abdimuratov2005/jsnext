import axios from "axios";
import Link from "next/link";
import styles from './portfolio.module.scss'
import NextPage from "@/components/NextPage/NextPage";

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

export default async function Portfolio() {
    const data = await getPortfolio();
    console.log(data)
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
                <h1 className={styles.portfolio__title}>Портфолио</h1>
                <div className='flex justify-center'>
                    <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                        return (
                            <Link href={`/portfolio/${item.link}`} className={styles.portfolio__item} key={item.link}>
                                <img className={styles.portfolio__image} src={item.img} alt=""/>
                                <h2 className={styles.portfolio__text}>{item.title}</h2>
                                <div className='flex justify-end'>
                                    <button className={styles.portfolio__link} >Посмотреть</button>
                                </div>

                            </Link>

                        )

                    })}
                    < /div>
                </div>
            </div>
            <NextPage url={'/contact'}></NextPage>
        </section>
    );
}
