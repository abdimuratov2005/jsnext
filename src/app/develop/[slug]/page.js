import axios from "axios";

export const getStaticPaths = async () => {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/develop';

    try {
        const res = await axios.get(url);
        const data = res.data.fields.routes;
        const paths = data.map((item) => ({
            params: { slug: item.route },
        }));
        console.log(paths)
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log(error);
        return {
            paths: [],
            fallback: true,
        };
    }
};

export const getServerSideProps = async ({ params }) => {
    const { slug } = params;
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai';

    try {
        const response = await fetch(`${url}/wp-json/mapbiz/v1/${slug}`);
        const post = await response.json();

        return {
            props: {
                post,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                post: null,
            },
        };
    }
    return {
        props: {
            post: '1'
        }
    }
};

export default function DevelopPage({ post }) {
    // Проверка, если post равен null, значит данные не были получены успешно
    if (!post) {
        return <h1>Error loading data</h1>;
    }

    return (
        <div>
            <h1>{post}</h1>
            <p></p>
        </div>
    );
}
