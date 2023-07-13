import Link from "next/link";

export default function NextPage(url, image) {

    return (
        <Link href={'/'}>
            <div style={{backgroundImage: ''}}>
                Блок с ссылкой
            </div>
        </Link>
    )
}