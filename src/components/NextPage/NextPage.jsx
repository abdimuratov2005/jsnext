import Link from "next/link";

export default function NextPage({url, image}) {

    return (
        <Link href={`${url}`}>
            <div className={`h-screen bg-cover bg-center bg-no-repeat cursor-next-mapbiz`} style={{backgroundImage: `url(${image})`}}>

            </div>
        </Link>
    )
}