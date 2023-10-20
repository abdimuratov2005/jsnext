'use client'
import ServicesMain from "@/components/Pages/Services/ServicesMain";
import ServicesList from "@/components/Pages/Services/ServicesList/ServicesList";
import Link from "next/link";

export default function Services() {

    return (

            <div className={'w-full relative'}>
                <ServicesMain/>
                <ServicesList/>
                <Link href={'/portfolio'}>
                    <div className="next h-screen bg-center bg-cover bg-no-repeat cursor-next-mapbiz" style={{backgroundImage: 'url(/img/home/from-services-to-portfolio.webp)'}}>
                    </div>
                </Link>
            </div>

    )
}

