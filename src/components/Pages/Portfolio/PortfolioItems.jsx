import styles from "@/app/portfolio/portfolio.module.scss";
import Link from "next/link";
import Image from "next/image";


export default function PortfolioItems({data}) {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.portfolio__title}>Портфолио</h1>
            <div className='flex justify-center'>
                <div className={`${styles.portfolio} justify-center`}>{data.map((item) => {
                    return (
                        <Link href={`/portfolio/${item.link}`} className={`${styles.portfolio__item} `}
                              key={item.link}>
                            <Image width={290} height={217} className={styles.portfolio__image} src={item.img} alt=""/>
                            <h2 className={styles.portfolio__text}>{item.title}</h2>
                            <div className='flex justify-end'>
                                <button className={styles.portfolio__link}>Посмотреть</button>
                            </div>
                        </Link>
                    )
                })}
                < /div>
            </div>
        </div>
    );
}
