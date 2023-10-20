'use client'
import React, {useContext} from 'react';
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import Link from "next/link";
import {links} from "@/components/Pages/HomePage/Services/links";
import {svg} from "@/components/Pages/HomePage/Services/svgs";

export default function ServicesList() {

    const {setDataButton, setDataDescriptionButton, setShow} = useContext(DataDevelopContext);

    return (
        <>

            <section className=" relative h-full flex justify-between  max-w-screen-xl mx-auto  pb-[200px]">
                <img src="/paralax.jpg" alt=""/>
                <div className="services-fone">
                    <div className="flex justify-end font-grotesk-light text-6xl leading-[5.5rem] text-white opacity-90">
                        <div className="services-nav w-8/12 gap-y-6">
                            {links && links.map((item) => {
                                return (
                                    <div className="services-nav__el group min-h-[220px]" key={item.id}>
                                        <Link className="flex justify-between items-center"
                                              onClick={() => setDataButton(item.data)}
                                              href={item.href}>
                                            <span>{item.title}</span>
                                            {svg}
                                        </Link>
                                        <div
                                            className="services-more__nav text-xs text-grey-mapbiz uppercase h-[0px] mt-6 group-hover:h-full overflow-hidden transition-all duration-500">
                                            <div className="services-more__wrapper flex flex-wrap gap-x-4 gap-y-6">
                                                {item.sublinks && item.sublinks.map((item) => {

                                                    return (
                                                        <Link
                                                            onClick={() => {
                                                                setShow(true)
                                                                setDataDescriptionButton(item.id)
                                                                setDataButton(item.data)
                                                            }}
                                                            key={item.id}
                                                            href={item.href}
                                                            className="services-more__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    )

                                                })}

                                            </div>
                                        </div>
                                    </div>

                                )

                            })}

                            <div className="services-more__about gap-y-10 text-2xl leading-9 text-white">
                                <p>
                                    На сайте представлены далеко не все направления нашей деятельности.
                                    Есть задача в WEB? - Обращайтесь.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}