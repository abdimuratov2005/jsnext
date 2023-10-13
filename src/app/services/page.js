'use client'
import ServicesMain from "@/components/Pages/Services/ServicesMain";
import ServicesList from "@/components/Pages/Services/ServicesList/ServicesList";
import Link from "next/link";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";


export default function Services() {
    return (
            <Parallax  className={`  `} pages={3}>
                <ParallaxLayer offset={0} speed={0.1}>
                    <ServicesMain/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <ServicesList/>
                </ParallaxLayer>
                <ParallaxLayer  offset={2} speed={1.5}>
                    <Link href={'/portfolio'}>
                        <div className="next h-full bg-center bg-cover bg-no-repeat cursor-next-mapbiz" style={{backgroundImage: 'url(/img/home/from-services-to-portfolio.webp)'}}>
                        </div>
                    </Link>
                </ParallaxLayer>
            </Parallax>
    )
}

