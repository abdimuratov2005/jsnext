'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AnimatePresence, motion} from "framer-motion";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import {EffectCards} from 'swiper/modules';

function Page(props) {

    // стейт менеджеры контента
    const [buttonsMenu, setButtonsMenu] = useState('develop')
    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [currentDescriptionButton, setCurrentDescriptionButton] = useState(0)

    const block = [
        {
            id: 1,
            el: 'develop',
            title: 'Разработка сайтов'

        },
        {
            id: 2,
            el: 'design',
            title: 'Дизайн'

        },
        {
            id: 3,
            el: 'market',
            title: 'Маркетинг'

        },
    ]


    const content = {

        develop: {
            title: 'Создание сайтов',
            description: 'Создаем веб сайты и сервисы различного направления и функционала. От одностраничных сайтов до онлайн сервисов с бекэндом.',
            els: [
                {
                    id: 1,
                    label: 'Корпоративный сайт',
                    content: {
                        title: 'Корпоративный',
                        description: 'Так называют многостраничный сайт со статичными страницами.\n' +
                            '\n' +
                            'В нашей компетенции разработка сайтов для компаний совершенно разного уровня и типа.\n' +
                            '\n' +
                            'Все успешные веб-студии знают “секретный состав работ” для создания сайта - лидера ниши.',
                        request: '/develop/create-company-more'
                    }
                },
                {
                    id: 2,
                    label: 'Интернет магазин',
                    content: {
                        title: 'Магазин / каталог',
                        description: 'От того как собран E-comerce сайт зависит не только продажи и перспиктивы, но и удобства его администрирования.\n' +
                            '\n' +
                            'Перспективы роста в поисковых выдачах и возможность развиваться с течением времени, внедрять новый функционал.\n' +
                            '\n' +
                            'Выполняя разные задачи клиентов мы научились делать реально современные сайты',
                        request: '/develop/create-shop-more'
                    }
                },
                {
                    id: 3,
                    label: 'Лендинг',
                    content: {
                        title: 'Одностраничный сайт',
                        description: 'Сайт, который имеет четкую цель, его логика, содержание и дизайн соответствуют целевой аудитории и задаче.\n' +
                            '\n' +
                            'Все успешные веб студии знают “секретный состав работ” для создания сайта - лидера ниши.',
                        request: '/develop/create-landing-more'
                    }
                },
                {
                    id: 4,
                    label: 'Для агентств недвижимости',
                    content: {
                        title: 'Для агентств недвижимости',
                        description: 'Разработка требует понимания специфических потребностей агентств - облегчение их рабочих процессов и контроля.\n' +
                            '\n' +
                            'Наши решения помогут вам развивать продажи в сети. Экспертность приобретена из опыта партнерских отношений с агенствами недвижимости',
                        request: '/develop/create-agency-more'
                    }
                },
                {
                    id: 5,
                    label: 'Для отелей',
                    content: {
                        title: 'Для гостиниц и отелей',
                        description: 'Вызвать эмоции и выделиться среди конкурентов.\n' +
                            '\n' +
                            'Легко оформить и оплатить бронь.\n' +
                            '\n' +
                            'Удобно управлять бронированием, легко продвигаться в поиске.\n' +
                            '\n' +
                            'Это на словах все просто а по факту удается далеко не каждому реализовать.\n' +
                            '\n' +
                            'Оцените наши успешные кейсы и решения.',
                        request: '/develop/create-hotel-more'
                    }
                },
            ]
        },
        design: {
            title: 'Дизайн',
            description: 'Мало просто красивой картинки. Для успеха необходимо учесть массу факторов - от пользовательского сценария до особенностей восприятия целевой аудитории и трендов... Вызываем эмоции графикой',
            els: [
                {
                    id: 1,
                    label: 'Web design',
                    content: {
                        title: 'Web design',
                        description: 'Разработка концепции будущего веб-ресурса строится на на основе анализа, прототипирования и пользловательского сценария. После, вырабатывается стилистика, с её учетом полученный прототип обрастает содержимым, графикой, анимациями и “чувствами”.\n' +
                            '\n' +
                            'Это и называется “Дизайн проект”.',
                        request: '/develop/'
                    }
                },
                {
                    id: 2,
                    label: '3d design',
                    content: {
                        title: '3d design',
                        description: 'От 3d съемки объектов и пространств до рендера 3d графики, а так же внедрение 3d графики в web пространство. Сегодня это уже отдельный вид графического искуства). Это требует особых навыков работы с специальными программами и средами.\n' +
                            '\n' +
                            'Зачастую внедрение 3д графики в веб среду требует выработки принципиально нового подхода.',
                        request: '/develop/'
                    }
                },
                {
                    id: 3,
                    label: 'Видео',
                    content: {
                        title: 'Видео',
                        description: 'Снять?\n' +
                            '\n' +
                            'Срендерить?\n' +
                            '\n' +
                            'Сгенерить?\n' +
                            '\n' +
                            'Или все это одновременно)?\n' +
                            '\n' +
                            'Богатый выбор дает возможность маневрировать и находить альтернативы.',
                        request: '/develop/'
                    }
                },
                {
                    id: 4,
                    label: 'Брендбук',
                    content: {
                        title: 'Брендбук',
                        description: 'Ваша компания на пути создания Бренда?\n' +
                            '\n' +
                            'Tone of voice? Корпоративный стиль?\n' +
                            '\n' +
                            'Стандартизация и выработка правил подачи инфы.\n' +
                            '\n' +
                            'Отныне это для вас не просто слова, а необходимость.',
                        request: '/develop/'
                    }
                },
                {
                    id: 5,
                    label: 'Графика',
                    content: {
                        title: 'Графика',
                        description: 'Создание рекламных постеров, карточек товаров, обложки к альбомам, рендер изображений недвижимости для застройщиков, интерьеры, меню для ресторанов, эскизы вывесок и многое другое...',
                        request: '/develop/'
                    }
                },
            ]
        },
        market: {
            title: 'Маркетинг',
            description: 'От стратегического планирования до реализации отдельных задач. Каждое действие может привести как к заработку так и к потере ваших денег. Ставим цели, оцифровуем и фиксируем в таймлайне.',
            els: [
                {
                    id: 1,
                    label: 'Реклама',
                    content: {
                        title: 'Реклама',
                        description: 'В данном блоке мы объединяем все платные инструменты Digital маркетинга.\n' +
                            '\n' +
                            'Наши кометенции - подбор инструментов и планирование, создание и управление, сокращение затрат и корректировка процесса в зависимости от целей заказчика.',
                        request: '/develop/'
                    }
                },
                {
                    id: 2,
                    label: 'Продвижение',
                    content: {
                        title: 'Продвижение',
                        description: 'Тут мы говорим не только о повышении места стайта в поисковой выдачи по фразам...\n' +
                            '\n' +
                            'Объединяем все те работы и методы, которые позволяют получать органический (не рекламный) трафик на ресурс.',
                        request: '/develop/'
                    }
                },
                {
                    id: 3,
                    label: 'SEO оптимизация',
                    content: {
                        title: 'SEO оптимизация',
                        description: 'Приведение к стандартам поисковиков ресурсов. Другими словами в результате этих действий поисковые роботы запомнят ваш саш сайт более качественным и более правильно определят содержимое.',
                        request: '/develop/'
                    }
                },
                {
                    id: 4,
                    label: 'Performance-маркетинг',
                    content: {
                        title: 'Performance-маркетинг',
                        description: 'Самый правильный подход.\n' +
                            '\n' +
                            'Четкие, измеримые цели.\n' +
                            '\n' +
                            'Один подрядчик для всех работ интернет маркетинга, фокус ответственности, скорость коммуникации и понятные перспективы.',
                        request: '/develop/'
                    }
                },
            ]
        }
    }

    const buttonsMenuChange = (el) => {
        setButtonsMenu(el)
        setCurrentDescriptionButton(0)
        setIsShow(false)
    }

    const CurrentDescriptionChange = (el) => {
        setCurrentDescriptionButton(el)
        setIsShow(true)
    }

    const CurrentDescriptionClose = () => {
        setIsShow(false)
        setCurrentDescriptionButton(0)
    }


    const [dataPopup, setDataPopup] = useState([])


    async function getData(link) {
        setIsLoading(true)
        const url = `https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1${link}`
        await axios.get(`${url}`).then(res => {
            const data = res.data.fields.blocks
            setDataPopup(data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <section className=' pt-44 pb-40 w-full'>
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
                {block.map((item) => {
                    return (
                        <button
                            onClick={() => buttonsMenuChange(item.el)}
                            key={item.id}
                            className={`${buttonsMenu === item.id ? 'bg-red-100' : ''} develop-nav-el w-full mx-auto flex justify-center items-center gap-x-6 py-4 relative hover:text-neon-mapbiz cursor-pointer select-none`}
                        >
                            <div
                                className="develop-nav-border__bottom absolute w-[95%] h-0.5 bg-white shadow-neon-mapbiz -bottom-1 left-0 right-0 mx-auto"/>
                            <div>
                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_238_343)">
                                        <g filter="url(#filter0_d_238_343)">
                                            <path
                                                d="M35.814 19.1374C35.86 22.5064 35.9221 25.8766 35.9436 29.2463C35.9513 30.4768 35.8349 31.7076 35.8232 32.9387C35.8064 34.671 34.1362 35.7152 32.2021 35.7471C28.2791 35.812 24.3549 35.889 20.4309 35.8727C15.7615 35.8532 11.0922 35.7554 6.42391 35.6581C5.33708 35.6145 4.25425 35.5202 3.18075 35.3758C1.87152 35.2251 0.584536 34.0037 0.537485 32.8464C0.418769 29.9208 0.282307 26.9947 0.242623 24.068C0.155218 17.6288 0.138159 11.1895 0.0534333 4.75103C0.0403728 3.76177 0.0715036 2.80373 0.575503 1.88878C0.952749 1.2041 1.49393 0.649972 2.42942 0.445248C2.76099 0.375874 3.10101 0.336558 3.44326 0.328104C4.90269 0.281236 6.36564 0.283492 7.82222 0.205787C13.2937 -0.085066 18.7645 0.137924 24.2359 0.174875C24.76 0.167002 25.2807 0.245558 25.7663 0.405846C26.252 0.566134 26.6924 0.804848 27.061 1.10738C28.804 2.45093 30.6722 3.68749 32.4797 4.97643C33.1465 5.4519 33.7615 5.97639 34.447 6.43216C35.2306 6.95328 35.4684 7.61839 35.4823 8.40197C35.5417 11.7254 35.6246 15.0484 35.6976 18.3716C35.7031 18.627 35.6976 18.8825 35.6976 19.138L35.814 19.1374ZM23.7449 1.91292C23.2491 1.88005 22.8269 1.83293 22.4037 1.82709C18.7954 1.77745 15.1869 1.73247 11.5783 1.69217C9.94704 1.67383 8.31549 1.66636 6.6841 1.65834C5.8551 1.65427 5.02445 1.63286 4.19762 1.66709C3.01565 1.716 2.66851 1.99417 2.45619 2.96536C2.25464 3.83406 2.21324 4.72216 2.33331 5.60075C2.38954 5.96966 2.41887 6.34102 2.4212 6.71274C2.44052 15.0086 2.4565 23.3041 2.46912 31.5993C2.45876 31.8083 2.46827 32.0175 2.49757 32.2253C2.70369 33.285 3.39238 33.9279 4.81731 33.9745C10.3441 34.1555 15.871 34.1547 21.3997 34.0789C24.1776 34.0407 26.956 34.0213 29.7342 33.9954C30.4207 33.9891 31.1087 34.0103 31.7937 33.9839C33.0277 33.9365 33.6039 33.4541 33.5925 32.4412C33.5726 30.6768 33.5165 28.9127 33.4721 27.1485C33.4464 26.1264 33.4246 25.1041 33.3827 24.0824C33.2893 21.8071 33.1398 19.5325 33.0962 17.2567C33.0488 14.7706 33.0962 12.2846 33.0991 9.79774C33.0991 9.61842 33.079 9.43899 33.0678 9.25315C32.9735 9.23237 32.8772 9.21826 32.7799 9.21109C31.0333 9.23934 29.2869 9.28426 27.5402 9.29268C26.9965 9.29614 26.4545 9.24589 25.9257 9.14316C24.8424 8.92934 24.5098 8.59201 24.3837 7.70043C24.3479 7.4468 24.3462 7.1902 24.3168 6.93575C24.1327 5.29673 23.9442 3.65627 23.7449 1.91292ZM31.757 7.36983L31.7925 7.22258L26.1218 3.04827L25.9912 3.11766C26.2696 4.60072 26.5481 6.0838 26.8347 7.61102L31.757 7.36983Z"
                                                fill="white"
                                            />
                                        </g>
                                        <path
                                            d="M27.4635 26.5907C26.5484 25.9169 25.6878 25.2798 24.8223 24.6479C24.5041 24.4152 24.1681 24.198 23.8524 23.963C23.7047 23.8532 23.574 23.7293 23.4628 23.5941C23.1596 23.2233 23.1751 22.8228 23.4836 22.5723C23.653 22.444 23.875 22.3712 24.1068 22.3681C24.3385 22.365 24.5636 22.4317 24.7382 22.5553C25.7057 23.1695 26.6629 23.7957 27.5931 24.4466C28.1766 24.8551 28.7019 25.3183 29.2561 25.7546C30.0324 26.3659 30.0883 26.8821 29.2844 27.4758C27.9951 28.4275 26.644 29.3233 25.3132 30.2383C25.0123 30.4526 24.6933 30.6497 24.3588 30.8282C23.8119 31.1089 23.2202 31.0436 22.899 30.6997C22.5809 30.3585 22.6884 29.888 23.2036 29.5358C24.3191 28.7733 25.45 28.0257 26.5683 27.2661C26.8485 27.0747 27.1048 26.8625 27.4635 26.5907Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M8.39993 26.6529C9.68153 27.2568 10.8659 27.8136 12.0485 28.3726C12.3269 28.4897 12.5942 28.6234 12.8482 28.7727C13.2293 29.0218 13.3209 29.3234 13.1692 29.6348C12.9984 29.9856 12.652 30.1559 12.1409 30.1018C11.9148 30.0781 11.6961 30.0206 11.4956 29.9324C9.89789 29.2124 8.29543 28.4995 6.71947 27.7495C5.89398 27.3567 5.81262 26.7714 6.42563 26.1736C6.55288 26.0496 6.70792 25.9445 6.84874 25.8294C8.25809 24.6782 9.67315 23.5318 11.073 22.373C11.5656 21.9654 11.9723 21.851 12.3174 22.0821C12.6674 22.3165 12.6928 22.6924 12.239 23.1373C11.292 24.0657 10.2915 24.9582 9.30881 25.8623C9.04609 26.1034 8.76764 26.3337 8.39993 26.6529Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.2756 21.3659C21.0254 21.2397 21.3127 21.3739 21.3138 21.9127C21.3 22.3296 21.2374 22.7445 21.1271 23.1517C20.7229 24.8646 19.9988 26.4988 19.2263 28.1197C18.9277 28.7461 18.6494 29.3814 18.2901 29.9846C18.0972 30.2871 17.8259 30.5523 17.4949 30.7618C17.2143 30.9445 16.828 30.8975 16.5405 30.7036C16.4008 30.6193 16.2986 30.5003 16.2495 30.3647C16.2003 30.2291 16.2068 30.0843 16.2679 29.952C16.406 29.6482 16.5682 29.3519 16.7535 29.0653C18.0992 26.9368 19.2509 24.7482 19.92 22.4087C20.0037 22.1155 20.0814 21.821 20.1669 21.5281C20.1961 21.4711 20.2324 21.4167 20.2756 21.3659Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_238_343"
                                            x="-5.94873"
                                            y="-5.9416"
                                            width="47.8926"
                                            height="47.8166"
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
                                                values="0 0 0 0 0.441862 0 0 0 0 0.945833 0 0 0 0 0.398038 0 0 0 0.45 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_238_343"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_238_343"
                                                result="shape"
                                            />
                                        </filter>
                                        <clipPath id="clip0_238_343">
                                            <rect width={36} height={36} fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
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
                                <div className="w-[85%] text-2xl leading-9 text-white opacity-90">
                                    {content[buttonsMenu]['description']}
                                </div>
                                <div
                                    className="foryou-nav mt-6 flex flex-wrap gap-x-4 gap-y-4 text-sm text-grey-mapbiz uppercase">
                                    {content[buttonsMenu]['els'].map((item) => {

                                        return (
                                            <button
                                                onClick={() => CurrentDescriptionChange(item.id)}
                                                key={item.id}
                                                href="#"
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
                                            className="foryou-toggle__close absolute top-6 right-6 cursor-pointer z-20">
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
                                        <div className="foryou-els relative z-10 px-9 py-20 text-white opacity-90">
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
                                            className="foryou-nav absolute z-20 w-full bottom-8 flex justify-end px-6 text-whitelink-mapbiz font-grotesk-medium text-lg">
                                            {
                                                content[buttonsMenu]['els'].map((item, index) => {
                                                    if (item.id === currentDescriptionButton) {
                                                        return (
                                                            <button key={index} className="foryou-nav-more ">
                                                                <div className="flex items-center gap-4">
                                                                    <span onClick={() => getData(item.content.request)}>смотреть состав работ</span>
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
                                        style={{
                                            backgroundImage: "url(/img/develop/develop-fone.webp)"
                                        }}
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
                        <div className='z-40 w-[1024px] mx-auto absolute top-0 left-0 right-0  h-screen '>
                            <button className='text-amber-50' onClick={() => setDataPopup([])}>Закрыть</button>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper">
                                {dataPopup && dataPopup.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            className="bg-transparent">
                                            <div
                                                className="develop-step-wrapper w-full h-auto bg-whitefone-mapbiz py-10 px-10 grid gap-8 rounded-[35px] relative ">
                                                <h2 className="develop-step-title font-medium text-2xl">
                                                    {item.title}
                                                </h2>
                                                <div dangerouslySetInnerHTML={{__html: item.text}}
                                                     className="develop-step-content text-[1.2rem]">

                                                </div>
                                                <div className="develop-step-gallery grid grid-cols-3 gap-8">
                                                    {item.media && item.media.map((image) => {
                                                        return (
                                                            image.imgs && image.imgs.map((item, index) => {
                                                                return (
                                                                    <div
                                                                        key={index}
                                                                        className="develop-step-gallery__el bg-center bg-cover bg-no-repeat h-[200px]"
                                                                        style={{
                                                                            backgroundImage: `url(${item.img})`
                                                                        }}
                                                                    >
                                                                    </div>)
                                                            })
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </motion.div> : '')
                }
            </AnimatePresence>
        </section>

    );
}

export default Page;