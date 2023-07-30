'use client'
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {block} from './develop';

// import required modules
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";

export default function DevelopSkills(props) {
    const { buttonsMenu, setDataButton, currentDescriptionButton, setDataDescriptionButton, isShow, setShow } = useContext(DataDevelopContext);

    const [technoContent, setTechnoContent] = useState([])
    const [expertContent, setExpertContent] = useState([])

    const buttonsMenuChange = (el) => {
        setDataButton(el)
        setTechnoContent([])
    }

    async function getData(link, type) {
        const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1${link}`
        await axios.get(`${url}`).then(res => {
            const data = res.data.fields.content[0][type]
            switch (type){
                case 'techno' :
                    setTechnoContent(data);
                    break;
                case 'expert' :
                    setExpertContent(data);
                    break;
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <section
            className="skills-wrapper min-h-screen bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(img/develop/develop-fone3.webp)"
            }}
        >
            <div className="skills max-w-screen-xl mx-auto pt-20 pb-20 flex justify-end font-grotesk-light">
                <div className="w-full grid gap-y-20">
                    <div
                        className="skills-header inline-block w-5/12 relative bg-center bg-cover bg-no-repeat rounded-[20px] shadow-interface-mapbiz select-none"
                        style={{
                            backgroundImage: "url(assets/images/develop/develop-skills-fone.svg)",
                            backdropFilter: "blur(205px)"
                        }}
                    >
                        <div className="">
                            <img
                                className="w-full h-auto -mt-4 cursor-default"
                                src="img/develop/develop-skills-btn-fone1.svg"
                                alt=""
                            />
                            <div className="py-4 px-32 absolute left-0 right-0 mx-auto text-sm text-center -top-4">
                                Меню инструментария
                            </div>
                        </div>
                        <div
                            className="pt-4 pb-4 pl-9 text-2xl text-whitetext-mapbiz tracking-[0.07rem] font-grotesk font-bold">
                            MaPbiz Group
                        </div>
                    </div>
                    <div className="skills-content w-10/12 mx-auto">
                        <div className="skills-content-title w-full relative h-auto select-none">
                            <img
                                className="w-full h-auto cursor-default"
                                src="img/develop/develop-skills-btn-fone2.svg"
                                alt=""
                            />
                            <div
                                className="py-2 px-32 absolute top-0 left-0 right-0 mx-auto text-center text-2xl text-whitetext-mapbiz tracking-[0.07rem] font-grotesk font-bold">
                                Арсенал
                            </div>
                        </div>
                        <div
                            className="skills-content-nav py-10 w-[80%] mx-auto flex justify-evenly text-sm text-whitetext-more-mapbiz uppercase">

                            {block.map((item) => {
                                // console.log(buttonsMenu);
                                // if(buttonsMenu === item.el){
                                //
                                // }
                                return (

                                    <button
                                        onClick={() => buttonsMenuChange(item.el)}
                                        key={item.id}
                                        className={`${buttonsMenu === item.id ? 'text-red-100' : ''} develop-skills-nav__el relative px-10 pb-5`}
                                    >
                                        <span className="transition-all duration-300">{item.title}</span>
                                        <div className="absolute left-0 right-0 mx-auto bottom-0">
                                            <svg
                                                className="base absolute bottom-0 w-full h-auto transition-all duration-300"
                                                width={137}
                                                height={7}
                                                viewBox="0 0 137 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 6L3.59615 1H30.7115L32.4423 3.22222H127.923L129.077 1H136V6H1Z"
                                                    stroke="#808080"
                                                    strokeOpacity="0.8"
                                                />
                                            </svg>
                                            <svg
                                                className="active absolute -bottom-0.5 w-full h-auto hidden transition-all duration-300"
                                                width={193}
                                                height={19}
                                                viewBox="0 0 193 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g filter="url(#filter0_d_644_823)">
                                                    <path
                                                        d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                        fill="#DCF1EB"
                                                        shapeRendering="crispEdges"
                                                    />
                                                    <path
                                                        d="M7 12L10.4423 7H46.3953L49.0726 10.3333H175.291L176.821 7H186V12H7Z"
                                                        stroke="url(#paint0_linear_644_823)"
                                                        shapeRendering="crispEdges"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_644_823"
                                                        x="0.0488281"
                                                        y="0.5"
                                                        width="192.451"
                                                        height={18}
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset/>
                                                        <feGaussianBlur stdDeviation={3}/>
                                                        <feComposite in2="hardAlpha" operator="out"/>
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_644_823"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_644_823"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <linearGradient
                                                        id="paint0_linear_644_823"
                                                        x1="80.6943"
                                                        y1="12.6855"
                                                        x2="80.6282"
                                                        y2="6.98246"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#00FFE5"/>
                                                        <stop offset={1} stopOpacity="0.02"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </button>



                                )
                            })}

                        </div>
                        <div className="skills-content-grid flex">
                            <div className="skills-content-techno w-[70%] pr-10">
                                <div className="relative">
                                    <div
                                        className="techno-border-left w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div
                                        className="techno-border-right w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute right-1 top-0"/>
                                    <div
                                        className="techno-border-bottom h-[6px] w-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div className="techno-border-el__left absolute left-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-techno-border-left.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="techno-border-el__right absolute right-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-techno-border-right.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="develop-skills-tecno__title relative select-none">
                                        <img
                                            className="w-full h-auto cursor-default"
                                            src="img/develop/develop-skills-btn-fone3.svg"
                                            alt=""
                                        />
                                        <div
                                            className="py-3 px-32 absolute top-0 left-0 right-0 mx-auto text-sm text-center">
                                            Доступные технологии
                                        </div>
                                    </div>
                                    <div
                                        className="develop-skills-techno__wrapper px-8 py-6 h-[350px] overflow-auto font-grotesk-medium text-whitetext-more-mapbiz text-sm text-center">
                                        <div
                                            className="develop-skills-techno__els pb-8"
                                        >

                                            <div className="develop-skills-techno__grid grid grid-cols-5 gap-5">
                                                {
                                                    block && block.map((item) => {
                                                        if(buttonsMenu === item.el){
                                                            getData(item.request, 'techno')
                                                            return technoContent.map((item, index) => {
                                                                console.log(item)
                                                                return (
                                                                    <div
                                                                        key={index}
                                                                        className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                                        <img
                                                                            className="w-[73px] h-[80px]"
                                                                            src={item.img}
                                                                            alt="JavaScript"
                                                                        />
                                                                        <span>{item.title}</span>
                                                                    </div>
                                                                )
                                                            })

                                                        }
                                                    })
                                                }

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="skills-content-expert w-[30%]">
                                <div className="relative">
                                    <div
                                        className="techno-border-left w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div
                                        className="techno-border-right w-[6px] h-[94%] bg-greywhite-interface-mapbiz absolute right-1 top-0"/>
                                    <div
                                        className="techno-border-bottom h-[6px] w-[90%] bg-greywhite-interface-mapbiz absolute left-1 -bottom-2"/>
                                    <div className="techno-border-el__left absolute left-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-expert-border-left.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="techno-border-el__right absolute right-1 -bottom-2">
                                        <img
                                            className="w-full h-auto select-none cursor-default"
                                            src="img/develop/develop-expert-border-right.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="develop-skills-expert__title relative select-none">
                                        <img
                                            className="w-full h-auto cursor-default"
                                            src="img/develop/develop-skills-btn-fone4.svg"
                                            alt=""
                                        />
                                        <div
                                            className="py-3 px-4 absolute top-0 left-0 right-0 mx-auto text-sm text-center">
                                            Специалисты
                                        </div>
                                    </div>
                                    <div
                                        className="develop-skills-expert__wrapper px-8 py-6 h-[350px] overflow-auto text-white text-xs text-center">

                                        <div
                                            className="develop-skills-expert__els"
                                        >
                                            <div className="develop-skills-expert__grid grid gap-3">
                                                {
                                                    block && block.map((item) => {
                                                        if(buttonsMenu === item.el){
                                                            getData(item.request, 'expert')
                                                            return expertContent.map((item, index) => {
                                                                console.log(item)
                                                                return (
                                                                    <div
                                                                        key={index}
                                                                        className="develop-skills-expert__el flex items-center gap-3">
                                                                        <img
                                                                            className="w-6 h-6"
                                                                            src={item.img}
                                                                            alt={item.title}
                                                                        />
                                                                        <span>{item.title}</span>
                                                                    </div>
                                                                )
                                                            })

                                                        }
                                                    })
                                                }

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-content-btns w-[65%] flex gap-8 mt-14 text-whitetext-more-mapbiz">
                            <div className="skills-content-btn w-auto inline-block">
                                <a className="block relative" href="#">
                                    <img
                                        className="base"
                                        src="assets/images/develop/develop-skills-btns.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover hidden"
                                        src="assets/images/develop/develop-skills-btns-active.svg"
                                        alt=""
                                    />
                                    <span
                                        className="absolute w-full top-0 bottom-0 my-auto flex items-center justify-center text-center">
                Смотреть портфолио
              </span>
                                </a>
                            </div>
                            <div className="skills-content-btn w-auto inline-block">
                                <a className="block relative" href="#">
                                    <img
                                        className="base"
                                        src="assets/images/develop/develop-skills-btns.svg"
                                        alt=""
                                    />
                                    <img
                                        className="hover hidden"
                                        src="assets/images/develop/develop-skills-btns-active.svg"
                                        alt=""
                                    />
                                    <span
                                        className="absolute w-full top-0 bottom-0 my-auto flex items-center justify-center text-center">
                Начать работу
              </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}