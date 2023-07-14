import Link from "next/link";

export default function NextPage({url, image}) {

    return (
        <Link href={`${url}`}>
            <div style={{backgroundImage: `url(${image})`}}>
                Блок с ссылкой
            </div>
        </Link>
    )
}