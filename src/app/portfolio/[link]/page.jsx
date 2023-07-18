
import axios from "axios";
import VerticalMode from "@/components/Slider/Slider";
import React from "react";


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
    const {title, client, descr, task, next_link, imgs} = data.fields.content[0]
    const {link, img} = next_link
    return (
            <section style={{backgroundImage: `url(/img/portfolio/bg.jpg)`}} className='bg-no-repeat bg-cover bg-no-repeat h-screen flex justify-center items-center relative'>
                <div className={`absolute items-center justify-start px-[135px] h-full max-h-[875px] gap-[15px] flex top-auto bottom-auto pt-[50px] pb-[50px] w-full bg-no-repeat bg-cover max-w-[1280px]`} style={{backgroundImage: `url(/img/portfolio/kpk.png)`}} >
                    <div>
                        <h1 className={'text-white text-[23px]'}>{title}</h1>
                        <VerticalMode data={imgs}/>
                    </div>

                    <div >
                        <div dangerouslySetInnerHTML={{__html: descr}}
                             className="text-[14px] max-w-[440px] text-white develop-step-content text-[1.2rem] ">

                        </div>

                        {/*<p className={'text-white'}>{task}</p>*/}
                        {/*<p className={'text-white'}>{client}</p>*/}
                    </div>
                </div>
            </section>
    );
}
