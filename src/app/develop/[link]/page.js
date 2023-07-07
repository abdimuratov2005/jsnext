import axios from "axios";
import Test from "@/components/Test/test";
export const getStaticPaths = async () => {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/develop';
    const res = await axios.get(url);
    const data = res.data.fields.routes;
    const paths = data.map((item) => ({
        params: {link: item.route},
    }));
    return {
        paths,
        fallback: false,
    };
};

export async function getDate(link) {
    const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/develop/${link}`
    const res = await axios.get(`${url}`)
    const data = res.data

    return {
            data,
    };

}


export default async function Page({params}) {
   const data =  await getDate(params.link).then(res => {
       return res
   })

    return (
        <>
            <div>{JSON.stringify(params.link)}</div>
            <Test data={data}></Test>
        </>
    )
}