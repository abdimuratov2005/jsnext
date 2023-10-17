'use client'
import React, {useContext, useEffect, useState} from 'react';
import styles from './Header.module.scss'
import Link from "next/link";
import {AnimatePresence, useMotionValueEvent, useScroll} from "framer-motion"
import Burger from "@/components/Burger/Burger";
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import {
    motion
} from "framer-motion"
import Image from "next/image";
import Quiz from "@/components/Quiz/Quiz";

// Загрузка компонента Burger динамически

function Header(props) {

    const {language, isLanguage, isQuizActive, setQuiz} = useContext(DataDevelopContext);
    const [isLogo, setIsLogo] = useState(false)
    const [openBurger, setOpenBurger] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    function handleOpen() {
        setOpenBurger(false)
    }

    const {scrollY} = useScroll()



    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest)
        if (latest >= 200) {
            // setIsLogo(true)
            setIsScroll(true)
        } else {
            setIsLogo(false)
            setIsScroll(false)
        }
    })

    useEffect(() => {

    },[])

    // квиз

    const [quizOpen, setQuizOpen] = useState(false)

    function handleQuiz () {
        setQuiz(prevState => !prevState)
    }

    const handleQuizClose = () => {
        setQuiz(false)
    }

    //квиз енд

    return (
        <>
            <motion.header
                initial={{}}
                animate={{backgroundColor: isScroll ? '#F5F9FF' : 'transparent'}} //цвет
                transition={{duration: 2}} // Длительность анимации
                className={`fixed h-[88px]  w-full z-20`}>
                <div
                    className="header-wrapper max-w-screen-xl mx-auto 2xl:py-4 flex 2xl:items-center flex-wrap lg:flex-nowrap">
                    <div
                        className="header-logo w-2/12 xl:w-5/12 font-grotesk-bold text-2xl md:text-4xl 2xl:text-[3rem] md:leading-[2rem] 2xl:leading-[3rem] font-bold text-white">
                        <Link href={'/'}>
                            <motion.div
                                initial={{width: '100%', height: '66px'}} // Начальная высота шапки
                                animate={
                                    {
                                        width: isScroll ? '90px' : '',
                                    }}
                                transition={{duration: 0.4}} // Длительность анимации
                                onAnimationComplete={() => {
                                    if(scrollY.get() < 100) {
                                        setIsLogo(false);
                                    } else {
                                        setIsLogo(true);
                                    }
                                }}
                                // style={{background: isScroll ? 'url(/img/mapLogo.svg) no-repeat center/contain' : '',}}
                                className={`whitespace-nowrap header-logo-text  ${isScroll ? styles.header__text : ''} 2xl:block overflow-hidden`}>
                                {isLogo ? <AnimatePresence
                                    >
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 1}}
                                        exit={{opacity: 0}}>
                                        <Image height={66} width={74} className={'z-20'} src={'/img/mapLogo.svg'} alt='лого'></Image>
                                    </motion.div>
                                </AnimatePresence>
                                    : 'MaPbiz Group'}
                            </motion.div>
                        </Link>
                        <div className="header-logo-img  2xl:block overflow-hidden h-0 w-0">
                            <img
                                className="h-[45px] w-auto"
                                src="@/img/header/header-logo.png"
                                alt=""
                            />
                        </div>
                        <div className="header-logo-mob 2xl:hidden">
                            <img
                                className="h-[45px] w-auto"
                                src="@/img/header/header-logo-white.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-6/12 2xl:w-3/12"/>
                    <div
                        className="header-els w-4/12 flex justify-end gap-x-6 font-grotesk-light text-xs text-greywhite-mapbiz">
                        <div
                            className="header-volume  2xl:block m-auto select-none cursor-pointer"
                            ffcoder-status="false"
                        >
                            <svg
                                onClick={() => setIsMuted(!isMuted)}
                                className="header-volume-mute"
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1009_4451)">
                                    <path
                                        d="M1.03279 23.6646C1.28902 23.7525 1.55375 23.7972 1.81976 23.7979C2.98901 23.791 4.36331 23.7101 5.71418 23.1689C5.82153 23.2572 5.92564 23.3442 6.02754 23.4295C6.27882 23.6395 6.51623 23.8379 6.7633 24.0234C9.72611 26.2443 12.8958 27.9383 16.4346 29.7668C16.5344 29.823 16.6421 29.8544 16.7517 29.8594C16.8258 29.8609 16.8988 29.837 16.9624 29.7901C17.0954 29.6899 17.1687 29.4948 17.1868 29.1905C17.1916 29.0282 17.2104 28.8669 17.2428 28.7095C17.9054 26.0055 18.2885 23.7689 18.4482 21.6709C18.5092 20.8667 18.5838 20.0495 18.6559 19.2592C18.7839 17.8603 18.9163 16.4137 18.9782 14.9843C19.1492 11.0534 18.9287 7.07081 18.7157 3.21954C18.6893 2.74117 18.6631 2.26274 18.6371 1.78426C18.6206 1.43401 18.5714 1.08726 18.4903 0.750855C18.465 0.627903 18.4189 0.512937 18.3547 0.413569C18.2906 0.3142 18.21 0.232691 18.1184 0.174453C18.015 0.122324 17.9039 0.0976356 17.7922 0.101992C17.6807 0.106349 17.571 0.139654 17.4706 0.199736C17.2919 0.291106 17.1067 0.375939 16.9276 0.45863C16.755 0.538274 16.5825 0.617905 16.412 0.703489C16.1833 0.818311 15.9533 0.930702 15.7237 1.04278C15.1163 1.33943 14.489 1.64613 13.8898 2.00034C12.9707 2.54354 12.0248 3.16259 11.0786 3.83995C9.63029 4.87685 8.21667 5.91376 6.7199 7.01173C6.12238 7.45 5.51863 7.89232 4.90864 8.33873C4.80252 8.33447 4.72355 8.33797 4.67421 8.34178C4.37669 8.36477 4.07806 8.38471 3.7798 8.40481C3.03116 8.45506 2.25706 8.507 1.49876 8.60523C0.79785 8.69569 0.440207 9.14584 0.33905 10.0644C0.310196 10.3546 0.294791 10.6465 0.292925 10.9388C0.254662 13.3847 0.217176 15.8305 0.180399 18.2763L0.122108 22.1014C0.103155 22.4512 0.183573 22.7983 0.349642 23.0833C0.515714 23.3684 0.757173 23.5738 1.03279 23.6646ZM16.1617 27.4691C16.1741 27.6086 16.1811 27.7487 16.1895 27.9126C14.894 26.6748 13.4389 25.3102 11.8482 24.2843C10.7374 23.5685 9.6264 22.8375 8.55186 22.1326C8.10979 21.8424 7.67288 21.5558 7.24107 21.2728C7.24987 20.6582 7.26186 20.0524 7.27363 19.4529C7.30227 18.0114 7.32933 16.6498 7.31086 15.2651C7.29301 13.8767 7.23086 12.5154 7.16516 11.0744C7.13789 10.4733 7.11029 9.86675 7.08562 9.25213C7.15581 9.18933 7.22853 9.13093 7.30353 9.07716C8.0946 8.5268 8.88607 7.97741 9.67797 7.42898C11.5109 6.15802 13.4063 4.84394 15.2617 3.53186C15.7009 3.20757 16.1253 2.85353 16.5325 2.47135C16.6725 2.34526 16.8156 2.21599 16.9623 2.087C16.9684 2.17309 16.9706 2.2595 16.9691 2.34589C16.9351 3.42659 16.9027 4.5074 16.8714 5.58831C16.7917 8.28465 16.7094 11.0728 16.5961 13.8117C16.4822 16.568 16.3178 19.5621 16.0789 23.2339C15.9987 24.6458 16.0263 26.0635 16.1617 27.469V27.4691ZM5.61213 20.86L5.5976 20.8708C5.55156 20.9134 5.49853 20.9434 5.44216 20.9584C4.53336 20.9692 3.60846 20.9663 2.71379 20.9632L2.20751 20.9616C2.18687 20.9585 2.16645 20.9535 2.1465 20.9463L2.13942 20.9442C2.13657 20.9236 2.13362 20.9028 2.13064 20.8818C2.11067 20.7589 2.09826 20.6345 2.09348 20.5093C2.07694 19.5485 2.0616 18.5878 2.04747 17.6267C2.02689 16.272 2.00453 14.9172 1.98041 13.5624C1.97074 13.0516 1.94669 12.5337 1.92363 12.033C1.90987 11.7368 1.89622 11.4406 1.88531 11.1441C1.87973 10.9944 1.88122 10.8411 1.88271 10.6792C1.88271 10.646 1.8833 10.6126 1.88355 10.5787L5.41503 10.3198C5.27247 13.4719 5.19188 17.1668 5.61188 20.8601L5.61213 20.86Z"
                                        fill={isScroll ? "#000000" : '#FFFFFFB2'}
                                    />
                                    {isMuted ? <path
                                            d="M26.4757 7.29849C26.0787 6.96267 25.5411 6.90772 25.225 7.1716C24.9203 7.42614 24.8505 7.90799 25.0517 8.37131C25.1475 8.59187 25.2626 8.80432 25.3736 9.00973C25.4227 9.10034 25.4717 9.19094 25.5193 9.28262C26.6909 11.5371 27.2109 13.4783 27.1557 15.3924V15.3989C27.169 17.0306 26.7641 18.6371 25.9815 20.0578C25.5956 20.7878 25.2253 21.5407 24.8671 22.2689C24.7154 22.5772 24.5635 22.8852 24.4109 23.1928C24.3048 23.4057 24.1075 23.802 24.4651 24.0301C24.5923 24.1042 24.7368 24.1412 24.883 24.1372C25.0048 24.1387 25.1257 24.1158 25.2392 24.0699C26.022 23.7428 26.7163 23.227 27.2633 22.566C28.2717 21.3178 28.9787 20.0962 29.4241 18.8313C29.7617 17.8781 29.9251 16.8693 29.906 15.8552C29.8524 13.0311 28.895 10.4063 26.9787 7.82962C26.8312 7.63349 26.6626 7.45527 26.4757 7.29849Z"
                                            fill={isScroll ? "#000000" : '#FFFFFFB2'}/> :
                                        <path
                                            d="M29.595 18.2283C29.0198 17.3956 28.4246 16.5606 27.8491 15.7532L27.4306 15.1656C27.3424 15.0418 27.2488 14.9219 27.1737 14.8271L27.4298 14.4841C27.6626 14.1726 27.8856 13.8738 28.1075 13.5736C28.228 13.4112 28.3493 13.2491 28.4713 13.0874C28.7766 12.6812 29.0926 12.2612 29.3844 11.8262C29.8515 11.1301 29.9186 10.4924 29.5685 10.0772C29.3667 9.83747 28.9163 9.56275 28.1689 10.4183C28.0402 10.5655 27.9149 10.7174 27.7896 10.8692C27.7182 10.9557 27.6469 11.0422 27.5749 11.1281L25.7375 13.3097C25.7127 13.286 25.688 13.2628 25.6632 13.2404C25.5621 13.1459 25.475 13.0641 25.3932 12.9764C25.0598 12.6188 24.727 12.2605 24.3946 11.9015C23.8832 11.3503 23.3709 10.8003 22.8574 10.2515C22.6335 9.99886 22.3911 9.77246 22.133 9.57525C21.9554 9.43492 21.7441 9.37372 21.5342 9.40194C21.3243 9.43017 21.1287 9.54607 20.9801 9.73028C20.7206 10.0793 20.7025 10.5814 20.9313 11.0736C21.0476 11.3363 21.1894 11.5805 21.3539 11.8009C21.8682 12.4641 22.5502 13.3361 23.2649 14.1995C23.4784 14.4575 23.7102 14.6923 23.9553 14.9411C24.0336 15.0202 24.1136 15.1014 24.1951 15.1848L24.1643 15.2134C24.0722 15.2918 23.9868 15.3812 23.9091 15.4803C22.9808 16.7496 22.0413 18.0449 21.1323 19.2978L20.9482 19.5513C20.8893 19.616 20.8438 19.6972 20.8156 19.788C20.7873 19.8786 20.7771 19.9763 20.7859 20.0727C20.8138 20.2418 20.9233 20.3799 21.1206 20.4953C21.1377 20.5054 21.1565 20.5106 21.1754 20.5106C21.1959 20.5106 21.2161 20.5046 21.2342 20.493C22.8137 19.4825 24.1454 18.0746 25.5896 16.4718L25.818 16.6713C26.9096 17.6252 27.9799 18.5598 29.0496 19.496C29.0693 19.5146 29.088 19.535 29.1053 19.5568C29.1573 19.6288 29.2251 19.6806 29.3007 19.7059L29.3193 19.7105C29.4811 19.7488 29.6827 19.797 29.8121 19.6765C29.88 19.5926 29.9287 19.4881 29.9533 19.3736C29.9778 19.2591 29.9771 19.1386 29.9515 19.0244C29.8742 18.734 29.7533 18.464 29.595 18.2283Z"
                                            fill={isScroll ? "#000000" : '#FFFFFFB2'}
                                        />
                                    }
                                </g>
                                <defs>
                                    <clipPath id="clip0_1009_4451">
                                        <rect width={30} height={30} fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-[60px] mr-4 2xl:mr-0 2xl:my-auto" ffcoder-lang="ru">
                            <button
                                onClick={() => isLanguage('russian')}
                                className={`select-none 
                                 ${language === 'russian' ? 'font-bold' : ''}
                                 ${isScroll ? styles.buttons__language : 'text-white'}`}>Ru
                            </button>
                            <span className={isScroll ? styles.buttons__language : 'text-white'}> / </span>
                            <button
                                onClick={() => isLanguage('english')}
                                className={`
                                 ${language === 'english' ? 'font-bold' : ''}
                                cursor-pointer ${isScroll ? styles.buttons__language : 'text-white'}`}>Eng
                            </button>
                        </div>
                        <button onClick={() => {
                            setOpenBurger(!openBurger)
                        }}
                                className={`${isScroll ? styles.burger__white : ''} ${styles.burger} header-burger hidden 2xl:block bg-center bg-no-repeat bg-contain w-14 h-12 cursor-pointer select-none hover:rotate-6 transition-all duration-300`}
                        ></button>
                        <button
                            className={`${styles.header__callback} btn block py-3 px-8 border border-white rounded-[24px] text-white bg-center bg-cover bg-no-repeat`}
                            onClick={handleQuiz}
                        >
                            Заказать проект
                        </button>

                    </div>
                </div>
                <Burger setIsOpen={handleOpen} isOpen={openBurger}></Burger>
            </motion.header>
            <Quiz isClose={handleQuizClose} isOpenQuiz={isQuizActive}></Quiz>
        </>
    );
}

export default Header;