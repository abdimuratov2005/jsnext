import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

export default function Team(props) {

    const teamList = [

        {
            id: 1,
            title: 'Chief Executive Officer',
            url: 'img/home/team-char.webp'
        },
        {
            id: 2,
            title: 'Team lead',
            url: 'img/home/team-char2.webp'
        },
        {
            id: 3,
            title: 'UX / UI Designer',
            url: 'img/home/team-char3.webp'
        },
        {
            id: 4,
            title: 'Chief Executive Officer',
            url: 'img/home/team-char.webp'
        },
        {
            id: 5,
            title: 'Team lead',
            url: 'img/home/team-char2.webp'
        },
        {
            id: 6,
            title: 'UX / UI Designer',
            url: 'img/home/team-char3.webp'
        },
        {
            id: 7,
            title: 'Chief Executive Officer',
            url: 'img/home/team-char.webp'
        },
        {
            id: 8,
            title: 'Team lead',
            url: 'img/home/team-char2.webp'
        },
        {
            id: 9,
            title: 'UX / UI Designer',
            url: 'img/home/team-char3.webp'
        },
        {
            id: 10,
            title: 'Chief Executive Officer',
            url: 'img/home/team-char.webp'
        },
        {
            id: 11,
            title: 'Team lead',
            url: 'img/home/team-char2.webp'
        },
        {
            id: 12,
            title: 'UX / UI Designer',
            url: 'img/home/team-char3.webp'
        }

    ];

    return (
        <div className="team pt-24 pb-24 flex justify-end font-grotesk-light">
            <div className="w-full">
                <h2 className="text-6xl max-w-screen-xl mx-auto leading-[5.5rem] text-white opacity-90">Команда</h2>
                <div className="team__els w-full h-[600px] mt-28">
                    <Swiper
                        freeMode={true}
                        speed={5000}
                        loop={true}
                        slidesPerView={4}
                        spaceBetween={200}
                        autoplay={{
                            disableOnInteraction: false,
                            delay: 1
                        }}
                        modules={[Autoplay]}
                        className="swiper-linear">
                        {teamList.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className="">
                                    <div className="client font-grotesk text-xl text-white-text-new-mapbiz uppercase text-center">
                                        <img src={item.url}
                                             alt={item.title}/>
                                        <div className="mt-8">{item.title}</div>
                                    </div>
                                </SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </div>

    );
}