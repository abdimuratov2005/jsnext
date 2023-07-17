'use client'
import ServicesMain from "@/components/Pages/Services/ServicesMain";
import ServicesList from "@/components/Pages/Services/ServicesList/ServicesList";
import Link from "next/link";
import {Parallax} from "@react-spring/parallax";


export default function Services() {

    return (
        <>
            <ServicesMain/>
                    <ServicesList/>
            <Link href={'/'}>
                <div className="next h-[120vh] bg-center bg-cover bg-no-repeat cursor-next-mapbiz">
                </div>
            </Link>
        </>


    )
}

