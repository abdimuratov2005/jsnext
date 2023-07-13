import axios from "axios";

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
    console.log(data.fields.content[0])
    const {title, client, descr, task} = data.fields.content[0]

    return (
        <>
            <h1 className={'text-white'}>{title}</h1>
            <p className={'text-white'}>{descr}</p>
            <p className={'text-white'}>{task}</p>
            <p className={'text-white'}>{client}</p>
        </>
    );
}
