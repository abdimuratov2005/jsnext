
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


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/develop/create-shop'
    const res = await axios.get(`${url}`)
    const data = res.data
    console.log("API response:", data);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}


export default function Page({data}) {
    console.log("Props data:", data);

    return (
        <>
          <div>123123213123</div>
            <Test data={data}></Test>
        </>
    )
}