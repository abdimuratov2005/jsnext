'use client'
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import {Autoplay, Navigation, Pagination} from "swiper/modules";


export default function Clients({posts}) {

    const [imagesOne, setImagesOne] = useState([])
    const [imagesTwo, setImagesTwo] = useState([])
    const [imagesThree, setImagesThree] = useState([])
    const [imagesFour, setImagesFour] = useState([])
    const [hoverBtn, setHoverBtn] = useState(false)
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai'

    useEffect(() => {
// Функция для получения ссылок на изображения
        function getImageUrls(numberCarousel, nameState) {
            // Выполнение запроса к REST API WordPress для получения данных постов
            axios.get(`${url}/wp-json/wp/v2/posts/46`)
                .then(response => {
                    const posts = response.data.acf[`${numberCarousel}`];
                    // Перебор постов
                    const newPosts = posts.map(post => {
                        return post.link;
                    });
                    return newPosts
                })
                .catch(error => {

                }).then(res => {
                axios.get(`${url}/wp-json/wp/v2/media`, {
                    params: {
                        include: res.join(',')
                    }
                }).then(res => {
                    return res.data.map((item) => {
                        return {link: item.source_url, alt: item.alt_text, id: item.id}
                    })
                }).then(res => {
                    nameState(res)
                })
            })
        }

        getImageUrls('carousel_first', setImagesOne);
        getImageUrls('carousel_second', setImagesTwo);
        getImageUrls('carousel_third', setImagesThree);
        getImageUrls('carousel_fourth', setImagesFour);
    }, [])
    const swiperRef = useRef(null);

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const hoverBtnChange = () => setHoverBtn(!hoverBtn);

    return (
        <div className="clients max-w-screen-xl mx-auto pt-64 pb-52 flex justify-end font-grotesk-light">
            <div className="w-full gap-y-12">
                <div className="flex w-[100%] justify-end">
                    <h2 className="w-11/12 text-6xl leading-[5.5rem] text-white opacity-90">
                        Наши клиенты
                    </h2>
                </div>
                <div className="clients-wrapper mt-28">
                    <div>
                        {imagesOne.length === 0 && imagesTwo.length === 0 && imagesThree.length === 0  && imagesFour.length === 0 ? ''
                            :
                            <>
                                <Swiper
                                    freeMode={true}
                                    speed={5000}
                                    loop={true}
                                    slidesPerView={4}
                                    spaceBetween={85}
                                    autoplay={{
                                        disableOnInteraction: false,
                                        delay: 1
                                    }}
                                    modules={[Autoplay]}
                                    className="swiper-linear">
                                    {imagesOne.map((item) => {
                                        return (
                                            <SwiperSlide
                                                key={item.id}
                                                className="">
                                                <div className="client">
                                                    <img src={item.link}
                                                         alt={item.alt}/>
                                                </div>
                                            </SwiperSlide>)
                                    })}
                                </Swiper>
                                <Swiper
                                    freeMode={true}
                                    speed={5000}
                                    loop={true}
                                    slidesPerView={4}
                                    spaceBetween={85}
                                    autoplay={{
                                        reverseDirection: true,
                                        disableOnInteraction: false,
                                        delay: 1
                                    }}
                                    modules={[Autoplay]}
                                    className="swiper-linear mt-8">
                                    {imagesTwo.map((item) => {
                                        return (
                                            <SwiperSlide
                                                key={item.id}
                                                className="">
                                                <div className="client">
                                                    <img src={item.link}
                                                         alt={item.alt}/>
                                                </div>
                                            </SwiperSlide>)
                                    })}
                                </Swiper>
                                <Swiper
                                    freeMode={true}
                                    speed={5000}
                                    loop={true}
                                    slidesPerView={4}
                                    spaceBetween={85}
                                    autoplay={{
                                        disableOnInteraction: false,
                                        delay: 1
                                    }}
                                    modules={[Autoplay]}
                                    className="swiper-linear mt-8">
                                    {imagesThree.map((item) => {
                                        return (
                                            <SwiperSlide
                                                key={item.id}
                                                className="">
                                                <div className="client">
                                                    <img src={item.link}
                                                         alt={item.alt}/>
                                                </div>
                                            </SwiperSlide>)
                                    })}
                                </Swiper>
                                <Swiper
                                    freeMode={true}
                                    speed={5000}
                                    loop={true}
                                    slidesPerView={4}
                                    spaceBetween={50}
                                    autoplay={{
                                        reverseDirection: true,
                                        disableOnInteraction: false,
                                        delay: 1
                                    }}
                                    modules={[Autoplay]}
                                    className="swiper-linear">
                                    {imagesFour.map((item) => {
                                        return (
                                            <SwiperSlide
                                                key={item.id}
                                                className="">
                                                <div className="client">
                                                    <img src={item.link}
                                                         alt={item.alt}/>
                                                </div>
                                            </SwiperSlide>)
                                    })}
                                </Swiper>
                            </>

                        }
                    </div>
                </div>

                <div className="flex justify-end text-sm">
                    <div className="inline-block w-auto mt-24">
                        <a
                            className="py-3 px-10 text-white underline hover:no-underline"
                            href="#"
                        >
                            Весь список работ
                        </a>
                    </div>
                    <div className="inline-block w-auto mt-24">
                        <a
                            className={`py-3 px-10 border ${ hoverBtn ? 'bg-btn-fone-hover border-crimsondark-mapbiz shadow-neon-mapbiz' : 'bg-btn-fone border-white'}  rounded-[24px] text-white transition-all duration-300`}
                            href="#"
                            onMouseEnter={hoverBtnChange}
                            onMouseLeave={hoverBtnChange}
                        >
                            Смотреть портфолио
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}



