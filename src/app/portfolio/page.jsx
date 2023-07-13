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
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
                <div className="type__line select-none">
                    работаем, кайфуем, творим, достигаем, развиваемся, приносим пользу
                </div>
            </div>
            <div className={styles.wrapper}>
                <h1 className={styles.portfolio__title}>Портфолио</h1>
                <div className='flex justify-center'>
                    <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                        return (
                            <div className={styles.portfolio__item} key={item.link}>
                                <img className={styles.portfolio__image} src={item.img} alt=""/>
                                <h2 className={styles.portfolio__text}>{item.title}</h2>
                                <div className='flex justify-end'>
                                    <Link className={styles.portfolio__link} href={`/portfolio/${item.link}`}>Посмотреть</Link>
                                </div>

                            </div>

                        )

                    })}
                    < /div>
                </div>
            </div>
            <NextPage></NextPage>
        </section>
    );
}
