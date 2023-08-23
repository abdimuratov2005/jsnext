'use client'
import './develop.css'
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {AnimatePresence, motion} from "framer-motion";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import {content, block} from './develop';

// import required modules
import {EffectCards, Mousewheel} from 'swiper/modules';
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";


export default function DevelopUnits() {
    const {
        buttonsMenu,
        setDataButton,
        currentDescriptionButton,
        setDataDescriptionButton,
        isShow,
        setShow
    } = useContext(DataDevelopContext);

    // стейт менеджеры контента
    const [dataPopup, setDataPopup] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        hiddenScrollBody()
    }, [dataPopup])

    function hiddenScrollBody() {
        if (dataPopup.length <= 0) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }


    const buttonsMenuChange = (el) => {
        setDataButton(el)
        setDataDescriptionButton(0)
        setShow(false)
    }

    const CurrentDescriptionChange = (el) => {
        setDataDescriptionButton(el)
        setShow(true)
    }

    const CurrentDescriptionClose = () => {
        setShow(false)
        setDataDescriptionButton(0)
    }


    async function getData(link) {
        setIsLoading(true)
        const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1${link}`
        await axios.get(`${url}`).then(res => {
            const data = res.data.fields.blocks
            setDataPopup(data)
            console.log(data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <motion.section
            initial={{opacity: 0, x: 500, y: 500, transition: {delay: 0.3}}}
            animate={{opacity: 1, x: 0, y:0,  transition: {delay: 0.3}}}
            exit={{opacity: 0, x: 500, y:500, transition: {delay: 0.3}}}
            className='pt-44 pb-40 w-full'>
            <div>
                <svg
                    className="w-full h-auto"
                    width={1454}
                    height={80}
                    viewBox="0 0 1454 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    <g filter="url(#filter0_d_460_881)">
                        <path d="M7 73L166 7H1289L1447 73" stroke="white"/>
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_460_881"
                            x="0.808105"
                            y="0.5"
                            width="1452.38"
                            height="78.9618"
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
                                result="effect1_dropShadow_460_881"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_460_881"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div
                className="develop-nav max-w-screen-xl mx-auto grid grid-cols-3 font-grotesk-light text-2xl text-whitetext-mapbiz -mt-16">
                {block && block.map((item, index) => {
                    return (
                        <button
                            onClick={() => buttonsMenuChange(item.el)}
                            key={item.id}
                            className={`${buttonsMenu === item.el ? 'text-neon-mapbiz develop-nav-el__active' : ''} develop-nav-el w-full mx-auto flex justify-center items-center gap-x-6 py-4 relative hover:text-neon-mapbiz cursor-pointer select-none`}
                        >
                            {index >= 1 &&
                                <div
                                    className="develop-nav-border__left absolute h-full w-0.5 bg-white shadow-neon-mapbiz left-0">
                                </div>
                            }
                            {
                                buttonsMenu !== item.el &&
                                <div
                                    className="develop-nav-border__bottom absolute w-[95%] h-0.5 bg-white shadow-neon-mapbiz -bottom-1 left-0 right-0 mx-auto"></div>
                            }
                            {item.svg}
                            <div>{item.title}</div>
                        </button>
                    )
                })}
            </div>


            <div className="max-w-screen-xl mx-auto pt-28 pb-40 font-grotesk font-light">
                <div className="w-full flex justify-end">
                    <div className="w-11/12 grid gap-y-24">
                        <h2 className="text-6xl leading-[5.5rem] text-white opacity-90">
                            {content[buttonsMenu]['title']}
                        </h2>
                        <div className="foryou-grid grid grid-cols-2">
                            <div className="">
                                <div className="w-[85%] text-2xl leading-9 text-white opacity-90 font-light">
                                    {content[buttonsMenu]['description']}
                                </div>
                                <div
                                    className="foryou-nav mt-6 flex flex-wrap gap-x-4 gap-y-4 text-sm text-grey-mapbiz uppercase">
                                    {content && content[buttonsMenu]['els'].map((item) => {
                                        return (
                                            <button
                                                onClick={() => CurrentDescriptionChange(item.id)}
                                                key={item.id}
                                                className={`${item.id === currentDescriptionButton && 'bg-white'} foryou-nav__el px-4 py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300`}
                                            >
                                                {item.label}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="foryou-toggle flex justify-end h-[530px]">
                                {isShow ?
                                    <div
                                        className="foryou-toggle__active w-[90%] h-full bg-center bg-cover bg-no-repeat relative">
                                        <img
                                            className="w-full h-full absolute left-0 top-0"
                                            src="/img/home/img.png"
                                            alt=""
                                        />
                                        <div
                                            onClick={() => CurrentDescriptionClose()}
                                            className="foryou-toggle__close absolute top-6 right-6 cursor-pointer z-10">
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.3226 17.9674C11.7133 20.3402 9.16172 22.6385 6.63565 24.9654C5.17224 26.3134 3.76123 27.7199 2.30123 29.0716C1.91237 29.4408 1.46552 29.7409 0.979126 29.9595C0.739275 30.0618 0.221335 29.9595 0.103217 29.7722C-0.0530674 29.5234 -0.00686019 29.082 0.0779113 28.7574C0.139582 28.5207 0.390682 28.3248 0.580112 28.1348C4.18256 24.5318 7.78667 20.9312 11.3923 17.3329C11.7969 16.9293 12.2131 16.538 12.6779 16.0898C11.1022 14.316 9.52409 12.6043 8.01749 10.829C5.61295 7.99437 3.25666 5.11755 0.880452 2.25835C0.794073 2.15444 0.71977 2.04071 0.632588 1.9368C0.216766 1.43749 -0.0763915 0.899327 0.397083 0.293654C0.751637 -0.159833 1.59922 -0.0921009 2.18941 0.524822C3.65925 2.06079 5.09106 3.63397 6.51089 5.21923C9.10345 8.11218 11.6758 11.024 14.2591 13.9255C14.3697 14.031 14.4873 14.1287 14.611 14.2178C16.6086 12.2784 18.584 10.3454 20.5759 8.42901C22.8861 6.2076 25.2043 3.99493 27.5306 1.79097C28.4033 0.962547 29.103 0.813227 29.6385 1.29658C30.1935 1.79732 30.1418 2.6339 29.2568 3.53085C26.8639 5.9562 24.4132 8.32265 21.9648 10.6917C20.0997 12.4971 18.2047 14.2714 16.2196 16.1571C17.8327 17.8518 19.3755 19.541 20.993 21.152C22.5466 22.6994 24.187 24.1571 25.7712 25.6726C26.3905 26.2429 26.9704 26.856 27.5069 27.5076C27.9396 28.0543 28.0035 28.733 27.4716 29.2722C26.9475 29.8041 26.3406 29.6161 25.835 29.2136C24.8679 28.4836 23.9408 27.7001 23.058 26.8667C20.3556 24.1783 17.7008 21.4406 15.0287 18.7207C14.8174 18.506 14.6154 18.2806 14.3226 17.9674Z"
                                                    fill="white"
                                                    fillOpacity="0.8"
                                                />
                                            </svg>
                                        </div>
                                        <div className="foryou-els relative px-9 py-20 text-white opacity-90">
                                            <div className="foryou-el">
                                                <h3 className="foryou-el__title font-grotesk-medium text-2xl leading-7">
                                                    {
                                                        content[buttonsMenu]['els'].map((item) => {
                                                            if (item.id === currentDescriptionButton) {
                                                                return item.content.title
                                                            }
                                                        })
                                                    }
                                                </h3>
                                                <div className="foryou-el__content mt-6 font-grotesk-light text-xl">
                                                    <p>
                                                        {
                                                            content[buttonsMenu]['els'].map((item) => {
                                                                if (item.id === currentDescriptionButton) {
                                                                    return item.content.description
                                                                }
                                                            })
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="foryou-nav absolute z-10 w-full bottom-8 flex justify-end px-6 text-whitelink-mapbiz font-grotesk-medium text-lg">
                                            {
                                                content[buttonsMenu]['els'].map((item, index) => {
                                                    if (item.id === currentDescriptionButton) {
                                                        return (
                                                            <button key={index} className="foryou-nav-more ">
                                                                <div className="flex items-center gap-4">
                                                                        <span
                                                                            onClick={() => getData(item.content.request)}>смотреть состав работ</span>
                                                                    <svg
                                                                        width={41}
                                                                        height={20}
                                                                        viewBox="0 0 41 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.7324 9.93514C13.8433 9.90013 8.95418 9.87207 4.06505 9.82476C3.09057 9.81514 2.11468 9.74748 1.14412 9.66311C0.983558 9.64768 0.831987 9.58974 0.70925 9.49689C0.586513 9.40404 0.498316 9.2806 0.456192 9.1427C0.376487 8.92192 0.653585 8.60874 0.984532 8.56269C1.30549 8.51806 1.62483 8.44882 1.9474 8.43164C4.00743 8.32125 6.0673 8.16498 8.1293 8.13202C12.3656 8.06469 16.6032 8.04765 20.8404 8.0434C24.8605 8.0393 28.8807 8.08376 32.9007 8.09196C33.5462 8.09338 34.1921 8.02147 34.8365 7.97053C34.8792 7.96121 34.9186 7.94252 34.9511 7.91621C34.9836 7.8899 35.008 7.8568 35.0223 7.81994C35.0339 7.73194 35.0044 7.58338 34.9383 7.55184C33.7029 6.95795 32.4828 6.33315 31.2125 5.80313C28.2573 4.57009 25.4851 3.05808 22.7148 1.54103C22.2596 1.29171 21.7824 1.03845 21.5988 0.543749C21.5654 0.453703 21.5134 0.299476 21.5558 0.269356C21.7078 0.144017 21.8925 0.0539037 22.0934 0.00709057C22.3074 -0.0152477 22.5242 0.0154373 22.7197 0.0957187C23.4119 0.372952 24.0991 0.662338 24.7726 0.973318C29.586 3.19591 34.398 5.42098 39.2085 7.64852C41.0255 8.48432 41.8889 9.29473 39.7078 11.1324C39.0794 11.6621 38.4437 12.191 37.7604 12.6621C34.5915 14.8488 31.4109 17.0222 28.2188 19.1822C27.7799 19.4608 27.3171 19.7086 26.8346 19.9234C26.5198 20.0745 26.2048 19.9849 25.933 19.8037C25.634 19.6042 25.4484 19.0244 25.5514 18.7694C25.7805 18.2032 26.237 17.7879 26.7272 17.4118C28.6147 15.9638 30.5122 14.5262 32.4198 13.099C33.6594 12.1664 34.9121 11.2475 36.1497 10.313C36.2109 10.2669 36.2139 10.1237 36.1892 10.0376C36.1729 10.0004 36.1466 9.96717 36.1127 9.94086C36.0787 9.91454 36.038 9.89591 35.9941 9.88657C35.3472 9.84904 34.6992 9.80126 34.0517 9.80426C28.9451 9.82812 23.8385 9.85786 18.7319 9.8935L18.7324 9.93514Z"
                                                                            fill="white"
                                                                            fillOpacity="0.8"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </button>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                    :

                                    <div
                                        className="foryou-toggle__base w-[90%] h-full bg-center bg-cover bg-no-repeat"
                                        style={{ backgroundImage: `url(${content[buttonsMenu].img})` }}
                                    />

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {dataPopup.length !== 0 &&
                    (!isLoading ? <motion.div
                        initial={{opacity: 0, clipPath: 'circle(0% at 50% 50%)'}}
                        animate={{opacity: 1, clipPath: 'circle(100% at 50% 50%)'}}
                        exit={{opacity: 0, clipPath: 'circle(0% at 50% 50%)'}}
                        transition={{duration: 0.5}}
                        style={{backdropFilter: 'blur(5px)'}}
                        className=' z-40 mx-auto fixed top-0 left-0 right-0 w-screen h-screen overflow-auto'>
                        <div className='z-40 w-[1024px] m-auto absolute top-0 left-0 right-0 bottom-0  h-[50vh]'>
                            <button className='text-amber-50 right-[30px] absolute top-[-80px]' onClick={() => {
                                setDataPopup([])
                            }}>
                                <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.3226 17.9674C11.7133 20.3402 9.16172 22.6385 6.63565 24.9654C5.17224 26.3134 3.76123 27.7199 2.30123 29.0716C1.91237 29.4408 1.46552 29.7409 0.979126 29.9595C0.739275 30.0618 0.221335 29.9595 0.103217 29.7722C-0.0530674 29.5234 -0.00686019 29.082 0.0779113 28.7574C0.139582 28.5207 0.390682 28.3248 0.580112 28.1348C4.18256 24.5318 7.78667 20.9312 11.3923 17.3329C11.7969 16.9293 12.2131 16.538 12.6779 16.0898C11.1022 14.316 9.52409 12.6043 8.01749 10.829C5.61295 7.99437 3.25666 5.11755 0.880452 2.25835C0.794073 2.15444 0.71977 2.04071 0.632588 1.9368C0.216766 1.43749 -0.0763915 0.899327 0.397083 0.293654C0.751637 -0.159833 1.59922 -0.0921009 2.18941 0.524822C3.65925 2.06079 5.09106 3.63397 6.51089 5.21923C9.10345 8.11218 11.6758 11.024 14.2591 13.9255C14.3697 14.031 14.4873 14.1287 14.611 14.2178C16.6086 12.2784 18.584 10.3454 20.5759 8.42901C22.8861 6.2076 25.2043 3.99493 27.5306 1.79097C28.4033 0.962547 29.103 0.813227 29.6385 1.29658C30.1935 1.79732 30.1418 2.6339 29.2568 3.53085C26.8639 5.9562 24.4132 8.32265 21.9648 10.6917C20.0997 12.4971 18.2047 14.2714 16.2196 16.1571C17.8327 17.8518 19.3755 19.541 20.993 21.152C22.5466 22.6994 24.187 24.1571 25.7712 25.6726C26.3905 26.2429 26.9704 26.856 27.5069 27.5076C27.9396 28.0543 28.0035 28.733 27.4716 29.2722C26.9475 29.8041 26.3406 29.6161 25.835 29.2136C24.8679 28.4836 23.9408 27.7001 23.058 26.8667C20.3556 24.1783 17.7008 21.4406 15.0287 18.7207C14.8174 18.506 14.6154 18.2806 14.3226 17.9674Z"
                                        fill="white"
                                        fillOpacity="0.8"
                                    />
                                </svg>
                            </button>
                            <Swiper
                                effect={'cards'}
                                mousewheel={true}
                                grabCursor={true}
                                modules={[EffectCards, Mousewheel]}
                                className="mySwiper overflow-hidden">
                                {dataPopup && dataPopup.map((item, index) => {
                                    console.log('Элемент попапа: ', item)
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            className="">
                                            <div
                                                className="overflow-auto h-[600px] develop-step-wrapper w-fit  bg-whitefone-mapbiz py-10 px-10 flex flex-col justify-between rounded-[35px] relative ">
                                                <div>
                                                    <h2 className="develop-step-title font-medium text-2xl mb-[30px]">
                                                        {item.title}
                                                    </h2>
                                                    <div dangerouslySetInnerHTML={{__html: item.text}}
                                                         className="develop-step-content text-[1.2rem]">

                                                    </div>
                                                </div>
                                                {/*<div className="h-230g h-350g h-370g h-270g h-250g h-290g h-130g h-300g h-200g"></div>*/}
                                                {/*<div className="grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10"></div>*/}
                                                <div className="">
                                                    {item.media && item.media.map((image, index) => {
                                                        if (image.imgs) {

                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className={`develop-step-gallery grid grid-cols-${item.media[0].cols} gap-8`}>{image.imgs.map((el, index) => {
                                                                    return (
                                                                        <div
                                                                            key={index}
                                                                            className={`develop-step-gallery__el h-[${item.media[0].height}px] bg-center bg-cover bg-no-repeat rounded-[10px]`}
                                                                            style={{
                                                                                backgroundImage: `url(${el.img})`,
                                                                            }}
                                                                        >
                                                                        </div>)
                                                                })}</div>
                                                            )
                                                        } else if (image.frame) {
                                                            return (
                                                                <div key={index}
                                                                     dangerouslySetInnerHTML={{__html: image.frame}}
                                                                     className="h-[600x] develop-step-content text-[1.2rem]">
                                                                </div>
                                                            )
                                                        } else if (image.icons) {
                                                            // console.log(image.icons)
                                                            return (
                                                                <div key={index} className="bg-darkgrey-mapbiz px-10 py-6 rounded-[25px] grid grid-cols-7 gap-[18px] text-whitetext-more-mapbiz text-sm font-medium">
                                                                    {image.icons.map((icon, index) => {
                                                                        return (
                                                                            <div
                                                                                key={index}
                                                                                className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                                                <img
                                                                                    className="w-[73px] h-[80px]"
                                                                                    src={icon.img}
                                                                                    alt="JavaScript"
                                                                                />
                                                                                <span>{icon.title}</span>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )
                                                        } else if (image.hybrid) {
                                                            console.log(image.hybrid)
                                                            return (
                                                                <div key={index} className="bg-darkgrey-mapbiz px-10 py-6 rounded-[25px] grid grid-cols-7 gap-[18px] text-whitetext-more-mapbiz text-sm font-medium">
                                                                    {image.icons.map((icon, index) => {
                                                                        return (
                                                                            <div
                                                                                key={index}
                                                                                className="develop-skills-techno__el flex flex-col items-center gap-y-3">
                                                                                <img
                                                                                    className="w-[73px] h-[80px]"
                                                                                    src={icon.img}
                                                                                    alt="JavaScript"
                                                                                />
                                                                                <span>{icon.title}</span>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )
                                                        }

                                                    })}
                                                </div>

                                                {dataPopup.length === index + 1 && <div
                                                    className="develop-step-btns flex justify-end gap-6 font-grotesk font-light text-xs"
                                                >
                                                    <a
                                                        href="#"
                                                        className="develop-step-portfolio btn-white px-8 py-3 text-darkgrey-mapbiz rounded-[24px] border border-darkgrey-mapbiz"
                                                    >
                                                        Смотрите портфолио
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="develop-step-talk btn-white px-8 py-3 rounded-[24px] bg-darkgrey-mapbiz text-white shadow-interface-mapbiz"
                                                    >
                                                        Обсудить проект
                                                    </a>
                                                </div>}
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </motion.div> : '')}
            </AnimatePresence>
        </motion.section>
    );
}

