import axios from "axios";
import Link from "next/link";

async function getPortfolio() {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/';
    try {
        const res = await axios.get(url);
        return res.data.fields.content[0].els.map((link) => {
            return link.link;
        });
    } catch (error) {
        console.log(error);
        return []; // или возвратите пустой массив в случае ошибки
    }
}

export default async function Portfolio(props) {
    const data = await getPortfolio();
    console.log(data)
    return (
        <div className='pt-[500px]'>{data.map((item) => {
            return <Link key={item} href={`/portfolio/${item}`}>{item}</Link>
        })}</div>
    );
}
