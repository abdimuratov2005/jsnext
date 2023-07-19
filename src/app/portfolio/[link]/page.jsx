import axios from "axios";
import VerticalMode from "@/components/Slider/Slider";
import Tabs from "@/components/Tabs/Tabs";


// тут ошибка ебаная

export const getStaticPaths = async () => {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
    const res = await axios.get(url).then(res => {
        return res.data.fields.content[0].els.map((link) => {
            return link.link
        })
    });
    const paths = res.map((item) => ({
        params: {link: item},
    }));
    return {
        paths,
        fallback: false,
    };
};

// тут ошибка ебаная


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
                 className='bg-no-repeat bg-cover bg-no-repeat h-screen flex justify-center items-center relative'>
            <div
                className={`justify-center absolute gap-4 px-[135px] h-full max-h-[875px] gap-[15px] flex flex-col top-auto bottom-auto pt-[50px] pb-[50px] w-full bg-no-repeat bg-contain mx-auto max-w-[1280px] bg-center`}
                style={{backgroundImage: `url(/img/portfolio/kpk.png)`,  aspectRatio: '16/9'}}>
                <h1 className={'text-white text-[23px]'}>{title}</h1>
                <div className={'flex gap-[15px]'}>
                    <div className={'flex-col flex  max-w-[500px]'}>
                        <VerticalMode data={imgs}/>
                    </div>
                    <Tabs descr={descr} pages={pages}  task={task} client={client}/>
                </div>
            </div>
        </section>
    );
}
