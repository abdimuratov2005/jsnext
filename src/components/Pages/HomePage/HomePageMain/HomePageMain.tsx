'use client'
import { motion } from 'framer-motion';
import React from 'react';

function HomePageMain(props) {
    return (
        <main className="intro-wrapper bg-darkgrey-mapbiz">

            <div className="max-w-screen-xl h-[100vh] mx-auto overflow-hidden">
                <div id="intro-3d-scene"></div>
            </div>
            <div
                className="intro max-w-screen-xl -mt-[100vh] mx-auto w-full 2xl:h-screen px-6 2xl:px-0 pt-20 2xl:pt-56 pb-12 2xl:pb-56 flex flex-nowrap justify-between 2xl:items-center">
                <div
                    className="intro-title header-change w-5/12 2xl:w-6/12 grid font-grotesk font-bold text-[15px] 2xl:text-[4.125rem] md:leading-[3.5rem] 2xl:leading-[6.25rem] font-bold text-white">
                    <h1 className='font-Grotesk font-bold'>Создание и продвижение сайтов</h1>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Click me!
                    </motion.button>

                </div>
                <div className="intro-3d w-7/12 2xl:w-4/12">
                    {/* <div id="intro-3d-scene" class="w-[600px] h-[300px]">

          </div> */}
                    <div className="2xl:hidden mt-8">
                        <svg
                            className="w-full h-auto -ml-8"
                            width={158}
                            height={145}
                            viewBox="0 0 158 145"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.738503 0.272723H38.475L78.3315 97.5114H80.0276L119.884 0.272723H157.621V145H127.94V50.8001H126.739L89.285 144.293H69.0741L31.6203 50.4467H30.4189V145H0.738503V0.272723Z"
                                fill="#470000"
                                fillOpacity="0.53"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className="intro-links hidden 2xl:block w-2/12 grid gap-y-8  ml-40 mt-8 md:mt-0 font-grotesk-light text-xs text-greywhite-mapbiz">
                    <div className="title">Контакты</div>
                    <div className="socials grid gap-y-1">
                        <a
                            href="tel:89892400897"
                            className="mb-4 hover:text-white"
                            target="_blank"
                        >
                            +7 989 240-0897
                        </a>
                        <a href="#" className="hover:text-white" target="_blank">
                            Telegram
                        </a>
                        <a
                            href="https://vk.com/id177191269"
                            className="hover:text-white"
                            target="_blank"
                        >
                            Vkontakte
                        </a>
                        <a
                            href="https://www.behance.net/mapbiz"
                            className="hover:text-white"
                            target="_blank"
                        >
                            Behance
                        </a>
                        <a
                            href="https://dribbble.com/mapbiz"
                            className="hover:text-white"
                            target="_blank"
                        >
                            Dribbble
                        </a>
                        <a href="#" className="hover:text-white" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className="email">
                        Сотрудничество
                        <a
                            href="mailto:mapbiz@yandex.ru"
                            className="hover:text-white"
                            target="_blank"
                        >
                            mapbiz@yandex.ru
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePageMain;