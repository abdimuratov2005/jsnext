import axios from "axios";
import VerticalMode from "@/components/Slider/Slider";
import Tabs from "@/components/Tabs/Tabs";
import Link from "next/link";




export default async function portFolioPageCurrent({params}) {
    async function getData(link) {
        const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/${link}`
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
            return null; // или возвратите значение по умолчанию в случае ошибки
        }
    }

    const data = await getData(params.link); // Добавляем await для ожидания завершения асинхронной функции
    const {title, client, descr, task, next_link, imgs, pages} = data.fields.content[0]

    const {link, img} = next_link

    return (
        <section style={{backgroundImage: `url(/img/portfolio/bg.jpg)`,}}
                 className='bg-no-repeat bg-cover bg-no-repeat h-[140vh] flex justify-center items-center relative'>
            <div
                className={`justify-center absolute gap-4 px-[135px] h-full max-h-[875px] gap-[15px] flex flex-col top-auto bottom-auto pt-[50px] pb-[50px] w-full bg-no-repeat bg-contain mx-auto max-w-[1280px] bg-center relative`}
                style={{backgroundImage: `url(/img/portfolio/kpk.png)`,  aspectRatio: '16/9'}}>
                <Link className={'absolute top-[15%] right-[15%]'} href={'/portfolio'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M15.2774 19.1652C12.4942 21.6962 9.7725 24.1477 7.07803 26.6298C5.51706 28.0677 4.01197 29.5679 2.45464 31.0097C2.03986 31.4035 1.56323 31.7237 1.0444 31.9568C0.78856 32.0659 0.236091 31.9568 0.110099 31.757C-0.0566052 31.4917 -0.00731754 31.0208 0.0831054 30.6746C0.148887 30.4221 0.416727 30.2131 0.618786 30.0104C4.4614 26.1673 8.30578 22.3266 12.1518 18.4884C12.5834 18.0579 13.0273 17.6406 13.5231 17.1625C11.8424 15.2704 10.159 13.4446 8.55199 11.551C5.98715 8.52733 3.47378 5.45872 0.939148 2.40891C0.847011 2.29807 0.767755 2.17675 0.674761 2.06592C0.231217 1.53332 -0.0814842 0.959282 0.423556 0.313231C0.801746 -0.170488 1.70584 -0.098241 2.33537 0.55981C3.9032 2.19817 5.43047 3.87624 6.94495 5.56718C9.71034 8.653 12.4542 11.7589 15.2097 14.8539C15.3277 14.9664 15.4531 15.0706 15.5851 15.1656C17.7158 13.097 19.8229 11.0351 21.9477 8.99094C24.4118 6.62144 26.8846 4.26126 29.366 1.91037C30.2968 1.02672 31.0432 0.867442 31.6144 1.38302C32.2064 1.91714 32.1513 2.80949 31.2072 3.76624C28.6548 6.35328 26.0407 8.87749 23.4292 11.4045C21.4396 13.3302 19.4184 15.2228 17.301 17.2343C19.0216 19.0419 20.6672 20.8437 22.3925 22.5621C24.0497 24.2127 25.7995 25.7675 27.4892 27.3841C28.1499 27.9924 28.7684 28.6464 29.3407 29.3414C29.8022 29.9246 29.8704 30.6486 29.303 31.2237C28.744 31.791 28.0967 31.5905 27.5574 31.1611C26.5258 30.3825 25.5369 29.5468 24.5952 28.6578C21.7126 25.7902 18.8808 22.87 16.0306 19.9688C15.8052 19.7397 15.5898 19.4993 15.2774 19.1652Z" fill="white" fillOpacity="0.8"/>
                    </svg>
                </Link>
                <h1 className={'text-white text-[23px]'}>{title}</h1>
                <div className={'flex gap-[15px] relative'}>
                    <div className={'flex-col flex  max-w-[500px]'}>
                        <VerticalMode data={imgs}/>
                    </div>
                    <Tabs descr={descr} pages={pages}  task={task} client={client}/>
                </div>
            </div>
        </section>
    );
}


// тут ошибка ебаная

// export  const getStaticPaths = async () => {
//
//     const res = (await axios.get('https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/')).data
//     const items = res.fields.content[0]?.els.map((link) => {
//         return link.link
//     })
//     const paths = items.map((item) => ({
//         params: {link: item},
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// };

// тут ошибка ебаная
