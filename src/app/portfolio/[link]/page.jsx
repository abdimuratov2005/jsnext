import axios from "axios";
import NextPage from "@/components/NextPage/NextPage";

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

    const {title, client, descr, task, next_link} = data.fields.content[0]
    const {link, img} = next_link
    return (
        <>
            <h1 className={'text-white'}>{title}</h1>
            <p className={'text-white'}>{descr}</p>
            <p className={'text-white'}>{task}</p>
            <p className={'text-white'}>{client}</p>
            <NextPage url={link} image={img}></NextPage>
        </>
    );
}
