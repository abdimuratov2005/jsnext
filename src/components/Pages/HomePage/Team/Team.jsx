'use client'
import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

export default function Team(props) {

    return (
        <div className="team pt-24 flex justify-end font-grotesk-light">
            <div className="w-full">
                <h2 className="text-6xl max-w-screen-xl mx-auto leading-[5.5rem] text-white opacity-90">Команда</h2>
                <div className="team__els w-full h-screen mt-28">
                    <iframe
                        src="http://localhost:3000/canvas"
                        name="myIFrame"
                        scrolling="no"
                        width="100%"
                        height="100%"
                        style={{ border: "solid #000000" }}
                    />
                </div>
            </div>
        </div>

    );
}